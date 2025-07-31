<?php

namespace App\Http\Controllers;

use App\Models\OrientationAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrientationController extends Controller
{
    public function showResults()
    {
        $user = Auth::user();
        $answers = OrientationAnswer::where('user_id', $user->id)->first();

        if (!$answers) {
            return response()->json(['error' => 'Aucune réponse trouvée'], 404);
        }

        // Analyse des réponses
        $data = json_decode($answers->answers, true);

        // Calcul des scores par profil
        $profils = [
            'technique' => 0,
            'commercial' => 0,
            'creatif' => 0,
            'gestion' => 0,
            'social' => 0
        ];

        // Exemple d'analyse basée sur les réponses
        if (isset($data['competences'])) {
            foreach ($data['competences'] as $key => $value) {
                if ($value === 'Oui') {
                    // Logique simplifiée : chaque compétence contribue à un profil
                    if (in_array($key, ['programmation', 'reseau', 'securite'])) {
                        $profils['technique'] += 1;
                    } elseif (in_array($key, ['vente', 'marketing', 'negociation'])) {
                        $profils['commercial'] += 1;
                    } elseif (in_array($key, ['design', 'creation', 'art'])) {
                        $profils['creatif'] += 1;
                    } elseif (in_array($key, ['gestion', 'planification', 'budget'])) {
                        $profils['gestion'] += 1;
                    } elseif (in_array($key, ['communication', 'travail_equipe', 'relation_client'])) {
                        $profils['social'] += 1;
                    }
                }
            }
        }

        // Calcul des soft skills (exemple simplifié)
        $softSkills = [
            'communication' => 0,
            'travail_equipe' => 0,
            'adaptabilite' => 0
        ];

        if (isset($data['soft_skills'])) {
            foreach ($data['soft_skills'] as $skill => $value) {
                if ($value === 'Oui') {
                    $softSkills[$skill] = 1;
                }
            }
        }

        // Retourne les résultats
        return response()->json([
            'profils' => $profils,
            'soft_skills' => $softSkills,
            'scores' => [
                'total' => array_sum($profils),
                'max' => max($profils)
            ]
        ]);
    }

    public function messagesHistory()
    {
        $user = Auth::user();
        
        // Récupérer les messages de l'utilisateur
        $messages = OrientationAnswer::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($answer) {
                return [
                    'id' => $answer->id,
                    'content' => $answer->message,
                    'sender' => 'user',
                    'timestamp' => $answer->created_at->toISOString(),
                ];
            })->toArray();

        return response()->json(['messages' => $messages]);
    }
} 