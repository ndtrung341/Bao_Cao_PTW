<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'userId' => $this->user_id,
            'transactionID' => $this->transaction_id,
            'customerName' => $this->customer_name,
            'address' => $this->address,
            'total' => $this->total,
            'status' => $this->status,
            'items' => $this->orderItems->map(function ($value) {
                return [
                    'product_id' => $value->product_id,
                    'price' => $value->price,
                    'quantity' => $value->quantity,
                    'product_name' => $value->product->name,
                    'thumbnail' => $value->product->thumbnail,
                    'total' => $value->total,
                ];
            }),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
