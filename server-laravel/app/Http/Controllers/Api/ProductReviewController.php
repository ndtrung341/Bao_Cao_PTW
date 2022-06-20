<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductReviewCollection;
use App\Models\ProductReview;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $page = $request->page ?? 1;
        $reviewList = ProductReview::with('product')->orderBy('approved')
            ->orderByDesc('created_at')
            ->paginate(12, ['*'], '_page', $page);
        return new ProductReviewCollection($reviewList);
    }

    public function getByProduct(Request $request)
    {
        $product_id = $request->productId;
        $page = $request->page ?? 1;
        $reviewList = ProductReview::with('product')
            ->where('product_id', $product_id)
            ->where('approved', 1)
            ->orderByDesc('created_at')
            ->paginate(3, ['*'], '_page', $page);
        return new ProductReviewCollection($reviewList);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $content = $request->content;
        $product_id = $request->productId;
        $rating = $request->rating;
        $username = $request->username;
        $email = $request->email;

        ProductReview::create([
            'username' => $username,
            'email' => $email,
            'product_id' => $product_id,
            'rating' => $rating,
            'content' => $content,
            'created_at' => Carbon::now()->timestamp
        ]);

        return response()->json(['message' => 'Thành công'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function show(ProductReview $productReview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function update(ProductReview $productReview)
    {
        $productReview->approved = true;
        $productReview->save();
        return response()->json($productReview, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductReview $productReview)
    {
        $productReview->delete();
        return response()->json('success', 200);
    }
}
