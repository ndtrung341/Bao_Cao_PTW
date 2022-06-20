<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVerification extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['user_id', 'code', 'expired'];
}
