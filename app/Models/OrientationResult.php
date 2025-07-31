<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrientationResult extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'result'];

    protected $casts = [
        'result' => 'array',
    ];
} 