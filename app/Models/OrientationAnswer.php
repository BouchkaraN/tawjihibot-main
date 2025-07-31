<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrientationAnswer extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'answers'];

    protected $casts = [
        'answers' => 'array',
    ];
}