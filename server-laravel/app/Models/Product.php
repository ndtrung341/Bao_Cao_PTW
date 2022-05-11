<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'brand_id', 'price', 'sale_price', 'quantity', 'description', 'status', 'thumbnail', 'slug'];

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, ProductCategory::class, 'product_id', 'category_id');
        // return $this->belongsToMany(Category::class, ProductCategory::class, 'product_id', 'category_id')->orderByDesc('created_at', 'id');
    }

    public function media()
    {
        return $this->hasMany(ProductImage::class);
    }
}
