<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\OrientationAnswerController;

Route::get('/', function () {
    return Inertia::render('landing');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Route protégée pour le test d'orientation
    Route::get('/test-orientation', function () {
        return Inertia::render('test-orientation');
    })->name('test-orientation');

    Route::post('/orientation-answers', [OrientationAnswerController::class, 'store']);

    Route::get('/mes-resultats', function () {
        return Inertia::render('MesResultats');
    })->name('mes-resultats');

    Route::get('/attente-analyse', function () {
        return Inertia::render('attente-analyse');
    })->name('attente-analyse');

    Route::get('/chatbot', function () {
        return Inertia::render('Chatbot');
    })->name('chatbot');
    
    Route::get('/secteurs', function () {
        return Inertia::render('SecteursMetiers');
    })->name('secteurs');
});

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::get('/sanctum/csrf-cookie', function () {
    return response('CSRF cookie set', 204);
});

// Routes publiques
Route::get('/', function () {
    return Inertia::render('landing');
})->name('home');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::get('/ecoles-universites', function () {
    return Inertia::render('EcolesUniversites');
})->name('ecoles-universites');

Route::get('/chatbot', function () {
    return Inertia::render('Chatbot');
})->name('chatbot');

// Routes protégées par auth
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/test-orientation', function () {
        return Inertia::render('test-orientation');
    })->name('test-orientation');

    Route::post('/orientation-answers', [OrientationAnswerController::class, 'store']);

    Route::get('/mes-resultats', function () {
        return Inertia::render('MesResultats');
    })->name('mes-resultats');

    Route::get('/attente-analyse', function () {
        return Inertia::render('attente-analyse');
    })->name('attente-analyse');
});

Route::get('/ecoles-universites/{slug}', function ($slug) {
    return Inertia::render('EcoleDetail', ['slug' => $slug]);
})->name('ecole-detail');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
