<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductReviewCollection extends ResourceCollection
{
    public function __construct($resource)
    {
        $this->pagination = [
            '_total' => $resource->total(),
            '_page' => $resource->currentPage(),
            '_start' => $resource->firstItem(),
            '_end' => $resource->lastItem(),
            '_limit' => $resource->perPage(),
            '_count' => $resource->count(),
        ];

        $resource =  $resource->getCollection();
        parent::__construct($resource);
    }
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($value) {
                return [
                    // 'user_id' => $value->user->id,
                    // 'fullname' => $value->user->fullname,
                    // 'email' => $value->user->email,
                    'id' => $value->id,
                    'username' => $value->username,
                    'email' => $value->email,
                    'productId' => $value->product_id,
                    'rating' => $value->rating,
                    'content' => $value->content,
                    'approved' => $value->approved,
                    'created_at' => $value->created_at,
                    'updated_at' => $value->updated_at,
                ];
            }),
            'pagination' => $this->pagination,
        ];
    }
}
