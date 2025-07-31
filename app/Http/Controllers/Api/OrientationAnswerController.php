<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\OrientationAnswer;
use App\Models\OrientationResult;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrientationAnswerController extends Controller
{

    // Enregistre ou met à jour les réponses de l'utilisateur connecté
    public function store(Request $request)
    {
        try {
            // Valider la requête
            $validated = $request->validate([
                'answers' => 'required|array',
            ]);

            // Récupérer l'utilisateur authentifié
            $user = $request->user();
            if (!$user) {
                return response()->json(['error' => 'Non authentifié'], 401);
            }

            // Démarrer une transaction pour assurer l'intégrité des données
            DB::beginTransaction();

            // Enregistrer les réponses
            $orientationAnswers = [];
            foreach ($validated['answers'] as $questionId => $answer) {
                $orientationAnswers[] = [
                    'user_id' => $user->id,
                    'question_id' => $questionId,
                    'answer' => is_array($answer) ? json_encode($answer) : $answer,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            // Supprimer les anciennes réponses de l'utilisateur
            OrientationAnswer::where('user_id', $user->id)->delete();
            
            // Insérer les nouvelles réponses
            OrientationAnswer::insert($orientationAnswers);

            // Appeler l'API OpenRouter pour l'analyse
            $apiKey = config('services.openrouter.key');
            if (!$apiKey) {
                throw new \Exception('Clé API OpenRouter non configurée');
            }

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'HTTP-Referer' => config('app.url', 'https://tawjihibot.ma'),
                'X-Title' => 'TawjihiBot',
                'Content-Type' => 'application/json',
            ])->timeout(60) // 60 secondes de timeout
            ->post('https://openrouter.ai/api/v1/chat/completions', [
                'model' => 'meta-llama/llama-3-70b-instruct',
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => "Tu es un conseiller d'orientation professionnelle. Analyse les réponses du test et retourne un JSON structuré avec les résultats d'orientation. Inclus les domaines recommandés, les compétences clés, et des suggestions de parcours professionnels."
                    ],
                    [
                        'role' => 'user',
                        'content' => 'Voici les réponses du test : ' . json_encode($validated['answers'])
                    ]
                ],
                'temperature' => 0.7,
                'max_tokens' => 2000,
            ]);

            if (!$response->successful()) {
                throw new \Exception('Erreur lors de l\'appel à l\'API OpenRouter: ' . $response->body());
            }

            $resultData = $response->json();
            
            // Stocker le résultat
            OrientationResult::updateOrCreate(
                ['user_id' => $user->id],
                ['result' => $resultData]
            );

            // Valider la transaction
            DB::commit();
            
            return response()->json([
                'success' => true,
                'redirect' => '/attente-analyse',
                'message' => 'Vos réponses ont été enregistrées avec succès. Analyse en cours...',
                'has_results' => true
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'error' => 'Erreur de validation',
                'errors' => $e->errors()
            ], 422);
            
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Erreur lors de l\'enregistrement des réponses: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $user->id ?? null
            ]);
            
            return response()->json([
                'success' => false,
                'error' => 'Une erreur est survenue lors du traitement de vos réponses.',
                'debug' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Vérifie le statut de l'analyse d'orientation
    public function getStatus(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['error' => 'Veuillez vous connecter'], 401);
        }

        $hasResults = OrientationResult::where('user_id', $user->id)->exists();
        
        return response()->json([
            'has_results' => $hasResults,
            'ready' => $hasResults
        ]);
    }

    /**
     * Récupère les résultats d'orientation de l'utilisateur connecté
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getResult(Request $request)
    {
        try {
            $user = $request->user();
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'error' => 'Non authentifié'
                ], 401);
            }

            $result = OrientationResult::where('user_id', $user->id)->first();
            
            if (!$result) {
                return response()->json([
                    'success' => false,
                    'error' => 'Aucun résultat trouvé pour cet utilisateur',
                    'has_results' => false
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $result->result,
                'has_results' => true,
                'last_updated' => $result->updated_at->toIso8601String()
            ]);

        } catch (\Exception $e) {
            \Log::error('Erreur lors de la récupération des résultats: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $user->id ?? null
            ]);
            
            return response()->json([
                'success' => false,
                'error' => 'Une erreur est survenue lors de la récupération des résultats.',
                'debug' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Met à jour les préférences utilisateur et analyse avec LLM
    public function updatePreferences(Request $request)
    {
        $request->validate([
            'personnalite' => 'required|array',
            'soft_skills' => 'required|array',
        ]);

        try {
            $apiKey = config('services.openrouter.key');
            $userId = Auth::id();
            
            $preferences = [
                'personnalite' => $request->personnalite,
                'soft_skills' => $request->soft_skills,
            ];

            // Log des préférences envoyées
            \Log::info('Préférences utilisateur', ['preferences' => $preferences]);

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'HTTP-Referer' => 'https://votre-site.com',
                'X-Title' => 'TawjihiBot',
            ])->post('https://openrouter.ai/api/v1/chat/completions', [
                'model' => 'opengvlab/internvl3-14b:free',
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => "Tu es un assistant d'orientation. Analyse les préférences de l'utilisateur et retourne un JSON structuré avec les scores, profils, soft skills, etc."
                    ],
                    [
                        'role' => 'user',
                        'content' => 'Voici les préférences de l\'utilisateur : ' . json_encode($preferences)
                    ]
                ],
            ]);

            if (!$response->successful()) {
                \Log::error('Erreur LLM', ['response' => $response->body()]);
                return response()->json(['error' => 'Erreur LLM', 'details' => $response->body()], 500);
            }

            $llmResponse = $response->json();
            \Log::info('Réponse brute LLM', ['raw_response' => $llmResponse]);

            // Extraire le contenu de la réponse
            $content = $llmResponse['choices'][0]['message']['content'] ?? null;
            \Log::info('Contenu extrait', ['content' => $content]);

            if (!$content) {
                \Log::error('Contenu vide dans la réponse LLM');
                return response()->json(['error' => 'Contenu vide dans la réponse LLM'], 500);
            }

            // Essayer de parser le JSON
            $resultData = null;
            try {
                $resultData = json_decode($content, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    \Log::error('Erreur de parsing JSON', ['error' => json_last_error_msg()]);
                    return response()->json([
                        'error' => 'Erreur de parsing JSON',
                        'details' => json_last_error_msg()
                    ], 500);
                }
            } catch (\Exception $e) {
                \Log::error('Erreur lors du parsing JSON', ['error' => $e->getMessage()]);
                return response()->json([
                    'error' => 'Erreur lors du parsing JSON',
                    'details' => $e->getMessage()
                ], 500);
            }

            // Stocker le résultat
            OrientationResult::updateOrCreate(
                ['user_id' => $userId],
                ['result' => $resultData]
            );

            return response()->json([
                'success' => true,
                'data' => $resultData
            ]);
        } catch (\Exception $e) {
            \Log::error('Exception lors de l\'appel LLM ou du stockage', ['exception' => $e->getMessage()]);
            return response()->json(['error' => 'Exception', 'details' => $e->getMessage()], 500);
        }
    }
}