<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id'];

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, CartItem::class, 'cart_id', 'product_id')->select([
            'product_id as productId',
            'name',
            'sale_price as salePrice',
            'price',
            'slug',
            'thumbnail',
            'cart_items.quantity'
        ]);
    }
}
