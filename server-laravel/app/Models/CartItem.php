<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $attributes = [
        'quantity' => 0
    ];

    protected $fillable = ['product_id', 'cart_id', 'quantity'];
}
