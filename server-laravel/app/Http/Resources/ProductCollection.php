<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
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
            'data' => $this->collection,
            'pagination' => $this->pagination
        ];
    }
}
