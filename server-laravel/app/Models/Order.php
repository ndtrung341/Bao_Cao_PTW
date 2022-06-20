<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['customer_name', 'user_id', 'phone', 'address', 'type', 'total', 'payment_method', 'created_at', 'cancelled_at', 'confirmed_at', 'completed_at'];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // public function products()
    // {
    //     return $this->belongsToMany(Product::class, OrderItem::class, 'order_id', 'product_id')->select();
    // }
}
