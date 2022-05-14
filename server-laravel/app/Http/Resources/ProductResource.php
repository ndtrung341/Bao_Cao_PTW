<?php

namespace App\Http\Resources;

use App\Models\FileUpload;
use App\Models\ProductImage;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection as IlluminateCollection;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    static $wrap = null;

    public function toArray($request)
    {
        $images = [];
        foreach ($this->images()->get() as $image) {
            $images[] = ['public_id' => $image->pivot->public_id, 'url' => $image->url];
        };
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'salePrice' => $this->sale_price,
            'salePercentage' => round((($this->price - $this->sale_price) / $this->price) * 100),
            'quantity' => $this->quantity,
            'description' => $this->description,
            'brand' => $this->brand()->first()->makeHidden(['created_at', 'updated_at']),
            'categories' => $this->categories()->get()->makeHidden(['created_at', 'updated_at']),
            'thumbnail' => $this->thumbnail,
            'productImages' => $images,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
