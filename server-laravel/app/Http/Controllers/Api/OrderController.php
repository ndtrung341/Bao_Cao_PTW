<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
// use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $type = $request->query('type', 0);
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 5);

        $orderList = Order::with('orderItems.product')
            ->when($type, function ($q, $type) {
                $q->where('type', $type);
            })
            ->orderByDesc('created_at')
            ->paginate($limit, ['*'], '_page', $page);

        return new OrderCollection($orderList);
    }

    public function history()
    {
        $user_id = Auth::user()->id;
        $order = Order::with('orderItems.product')->where('user_id', $user_id)->orderByDesc('created_at')->get();
        return OrderResource::collection($order);
    }

    public function getPurchaseOfUser(Request $request)
    {
        $user_id = Auth::user()->id;

        $type = $request->query('type', 0);
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 5);

        $orderList = Order::with('orderItems.product')
            ->where('user_id', $user_id)
            ->when($type, function ($q, $type) {
                $q->where('type', $type);
            })
            ->orderByDesc('created_at')
            ->paginate($limit, ['*'], '_page', $page);


        // return response()->json(Order::find(1));
        // return OrderResource::collection($orderList);

        return new OrderCollection($orderList);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $user_id = Auth::user()->id;

            $order_items = [];
            $total = 0;

            // calculate total price and store order item to array
            foreach ($request->cartItems as $item) {
                $item_total = $item['quantity'] * $item['salePrice'];

                $total += $item_total;

                $order_items[] = array(
                    'product_id' => $item['productId'],
                    'quantity' => $item['quantity'],
                    'price' => $item['salePrice'],
                    'total' => $item_total,
                );
            }

            // create order
            $order = Order::create([
                'user_id' => $user_id,
                // 'transaction_id' => $request->transactionID,
                'customer_name' => $request->customerName,
                'address' => $request->address,
                'phone' => $request->phone,
                'total' => $total,
                'payment_method' => $request->payment,
                'created_at' => Carbon::now(),
                // 'updated_at' => Carbon::now()->timestamp
            ]);

            // create order item then loop each to update quantity in stock of product
            foreach ($order->orderItems()->createMany($order_items) as $order_item) {
                $order_item->product->decrement('quantity', $order_item->quantity);
            }

            // clear cart user
            Cart::where('user_id', $user_id)->first()->cartItems()->delete();

            DB::commit();
            return response()->json(['status' => 'success', 'message' => 'Order has been placed', 'data' => $order], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        try {
            DB::beginTransaction();
            $order->orderItems()->delete();
            $order->delete();
            DB::commit();
            return response()->json(['message' => 'Xóa thành công'], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function cancelOrder(Request $request)
    {
        $order_id = $request->post('id');
        $order = Order::where('id', $order_id)->firstOrFail();
        $order->type = 4;
        $order->cancelled_at = Carbon::now();
        $order->save();
        return response()->json(['message' => 'success']);
    }

    public function confirmOrder(Request $request)
    {
        $order_id = $request->post('id');
        $order = Order::where('id', $order_id)->firstOrFail();
        $order->type = 2;
        $order->confirmed_at = Carbon::now();
        $order->save();
        return response()->json(['message' => 'success']);
    }

    public function completeOrder(Request $request)
    {
        $order_id = $request->post('id');
        $order = Order::where('id', $order_id)->firstOrFail();
        $order->type = 3;
        $order->confirmed_at = Carbon::now();
        $order->save();
        return response()->json(['message' => 'success']);
    }
}
