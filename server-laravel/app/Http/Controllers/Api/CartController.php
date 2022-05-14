<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $cart = Cart::with('products')->where('user_id', $user->id)->first();

        // create new cart if not exits
        if (!$cart) {
            $cart = new Cart;
            $cart->user_id = $user->id;
            $cart->save();
        }

        return new CartResource($cart);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // authenticate user
        $user = JWTAuth::parseToken()->authenticate();

        // get request product id and quantity
        $product_id = $request->productId;
        $quantity = $request->quantity;

        if (!Product::find($product_id)) {
            return response()->json('Product not found');
        }

        // find cart
        $cart = Cart::where('user_id', $user->id)->first();

        // get all cart item
        $cartItems = $cart->cartItems();

        // get old quantity
        $oldQuantity = $cartItems->where('product_id', $product_id)->pluck('quantity')->first();
        $quantity += $oldQuantity;

        // update quantity or create new item in cart
        $cartItems->updateOrCreate(
            ['product_id' => $product_id, 'cart_id' => $cart->id],
            ['quantity' => $quantity]
        );

        return response()->json(['status' => 'success', 'message' => 'Đã thêm vào giỏ hàng'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // authenticate user
        $user = JWTAuth::parseToken()->authenticate();

        // get request product id and quantity
        $product_id = $request->productId;
        $quantity = $request->quantity;

        if (!Product::find($product_id)) {
            return response()->json('Product not found');
        }

        // find cart items
        $cart = Cart::where('user_id', $user->id)->first();

        // update
        $cart->cartItems()->where('product_id', $product_id)->update(
            ['quantity' => $quantity]
        );

        return response()->json(['status' => 'success', 'message' => 'Đã cập nhật giỏ hàng'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        // authenticate user
        $user = JWTAuth::parseToken()->authenticate();

        $product_id = $request->productId;

        $cart = Cart::where('user_id', $user->id)->first();

        $cart->cartItems()->where('product_id', $product_id)->delete();

        return response()->json(['status' => 'success', 'message' => 'Xóa thành công'], 200);
    }

    /**
     * Clear cart
     *
     * @return \Illuminate\Http\Response
     */
    public function clear()
    {
        // authenticate user
        $user = JWTAuth::parseToken()->authenticate();

        $cart = Cart::where('user_id', $user->id)->first();

        $cart->cartItems()->where('cart_id', $cart->id)->delete();

        return response()->json('Làm trống giỏ hàng thành công');
    }
}
