<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['transaction_id', 'customer_name', 'user_id', 'phone', 'address', 'status', 'total'];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // public function products()
    // {
    //     return $this->belongsToMany(Product::class, OrderItem::class, 'order_id', 'product_id')->select();
    // }
}
