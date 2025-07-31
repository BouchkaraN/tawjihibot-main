<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\Api\ChatbotController;
use App\Http\Controllers\Api\OrientationAnswerController;
use App\Http\Controllers\Api\OrientationController;
use Illuminate\Http\Request;

// Routes protégées par authentification
Route::middleware('auth:sanctum')->group(function () {
    // Routes d'orientation
    Route::get('/orientation-status', [OrientationAnswerController::class, 'getStatus']);
    Route::post('/orientation-answers', [OrientationAnswerController::class, 'store']);
    Route::post('/orientation/preferences', [OrientationAnswerController::class, 'updatePreferences']);
    Route::get('/orientation/result', [OrientationAnswerController::class, 'getResult']);
    Route::get('/orientation-answers', [OrientationAnswerController::class, 'show']);
    Route::get('/orientation-results', [OrientationAnswerController::class, 'showResults']);
    Route::get('/llm-response', [OrientationAnswerController::class, 'getLLMResponse']);
    Route::get('/chatbot/sessions', [ChatController::class, 'getSessions']);
    Route::post('/chatbot/messages/authmode', [ChatbotController::class, 'handleAuthenticatedMessage']);
    Route::get('/chatbot/messages/{sessionId}', [ChatController::class, 'getMessagesBySession']);
});

// Routes publiques (sans authentification)
Route::post('/login', [AuthController::class, 'login']);


// Routes publiques
// renommée
Route::post('/chatbot/messages', [ChatbotController::class, 'sendMessage']);
Route::get('/chatbot', [ChatbotController::class, 'index']);


?>