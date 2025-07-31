<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;

        return response()
            ->json(['user' => $user])
            ->withCookie(cookie(
                'auth_token',
                $token,
                config('sanctum.expiration', 60 * 24 * 7),
                '/',
                null,
                true, // secure
                true, // httpOnly
                false,
                'Lax'
            ));
    }

    
}

