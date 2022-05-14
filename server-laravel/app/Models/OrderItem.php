<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $primaryKey = ['order_id', 'product_id'];
    // disable timestamps column
    public $timestamps = false;
    // disable auto incrementing primary key
    public $incrementing = false;

    protected $fillable = ['order_id', 'product_id', 'quantity', 'price', 'total'];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
