<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use App\Models\ChatSession;
use App\Models\ChatMessage;

class ChatbotController extends Controller
{
    protected function getOrCreateSession()
    {
        if (!auth()->check()) return null;

        return ChatSession::firstOrCreate(['user_id' => auth()->id()]);
    }

    /**
     * Handle chatbot message for guests
     */
    public function sendMessage(Request $request)
    {
        return $this->processMessage($request, false);
    }

    /**
     * Handle authenticated chatbot message
     */
    public function handleAuthenticatedMessage(Request $request)
    {
        return $this->processMessage($request, true);
    }

    /**
     * Process chatbot message (common logic for both guest and authenticated users)
     */
    private function processMessage(Request $request, $isAuthenticated)
    {
        try {
            $content = $request->input('content');
            if (!$content) {
                return response()->json(['error' => 'Contenu requis'], 400);
            }

            error_log('🚀 Message utilisateur reçu: ' . $content);

            $session = $isAuthenticated ? $this->getOrCreateSession() : null;

            // Sauvegarde message utilisateur
            if ($session) {
                ChatMessage::create([
                    'chat_session_id' => $session->id,
                    'sender' => 'user',
                    'content' => $content,
                ]);
            } else {
                DB::table('chatbot_messages')->insert([
                    'content' => $content,
                    'sender' => 'user',
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            // Définir le message système selon le contexte
            $systemMessage = null;

            if (stripos($content, 'ecole') !== false) {
                $systemMessage = "Tu es un expert en orientation scolaire au Maroc. Donne des conseils détaillés sur les écoles disponibles dans tous les domaines (scientifique, technique, professionnel, etc.).";
            } elseif (stripos($content, 'filiere') !== false) {
                $systemMessage = "Tu es un conseiller académique marocain expert. Aide l'utilisateur à comprendre les différentes filières et à choisir en fonction de ses compétences et intérêts.";
            } elseif (stripos($content, 'conseil') !== false) {
                $systemMessage = "Tu es un coach en orientation académique et professionnelle au Maroc. Fournis des conseils pratiques, personnalisés et motivants pour aider l'utilisateur à avancer dans ses choix.";
            }

            // Préparer les messages pour l'API
            $messages = [];
            if ($systemMessage) {
                $messages[] = ['role' => 'system', 'content' => $systemMessage];
            }
            $messages[] = ['role' => 'user', 'content' => $content];

            // Appel API OpenRouter
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('OPENROUTER_API_KEY'),
                'Content-Type' => 'application/json',
            ])->post('https://openrouter.ai/api/v1/chat/completions',  [
                # 'model' => env('OPENROUTER_MODEL', 'opengvlab/internvl3-14b:free'),
                'model' => 'mistralai/mistral-7b-instruct:free',
                #
                'messages' => $messages,
                'stream' => false,
            ]);
            
            # 
            error_log('✅ Réponse brute API: ' . $response->body());
            #
            $data = $response->json();

            if (!isset($data['choices'][0]['message']['content'])) {
                throw new \Exception('Invalid API response');
            }


            $botReply = $data['choices'][0]['message']['content'];

            // Sauvegarde réponse bot
            if ($session) {
                ChatMessage::create([
                    'chat_session_id' => $session->id,
                    'sender' => 'bot',
                    'content' => $botReply,
                ]);
            } else {
                DB::table('chatbot_messages')->insert([
                    'content' => $botReply,
                    'sender' => 'bot',
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            return response()->json(['response' => $botReply], 200);

        } catch (\Exception $e) {
            error_log('Erreur Chatbot: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function messagesHistory()
    {
        try {
            if (auth()->check()) {
                $session = ChatSession::where('user_id', auth()->id())->first();
                if (!$session) return response()->json(['messages' => []]);

                $messages = ChatMessage::where('chat_session_id', $session->id)->orderBy('created_at')->get();
            } else {
                $messages = DB::table('chatbot_messages')->orderBy('created_at')->get();
            }

            // Formater les messages pour la réponse JSON
            $formattedMessages = $messages->map(function ($message) {
                return [
                    'id' => $message->id,
                    'content' => $message->content,
                    'sender' => $message->sender,
                    'created_at' => $message->created_at->toISOString()
                ];
            });

            return response()->json(['messages' => $formattedMessages]);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur historique'], 500);
        }
    }
};