import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '@/components/ui/card';
import { BookOpen, CheckCircle, Lightbulb, Target, Clock, TrendingUp, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

type Conseil = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export default function Dashboard() {
    // Vérifie si le test est complété (flag dans localStorage)
    // const [testDone, setTestDone] = useState(false);

    const conseils: Conseil[] = [
        {
            title: "Explorer ses centres d'intérêt",
            description: "Prenez le temps d'explorer différents domaines qui vous passionnent. La curiosité est le premier pas vers une orientation réussie.",
            icon: <Lightbulb className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Définir des objectifs clairs",
            description: "Établissez des objectifs précis pour vos études. Un objectif clair vous aidera à rester motivé et concentré.",
            icon: <Target className="w-6 h-6 text-green-500" />
        },
        {
            title: "Organiser son temps",
            description: "Apprenez à gérer efficacement votre temps. Un bon équilibre entre études, loisirs et repos est essentiel.",
            icon: <Clock className="w-6 h-6 text-yellow-500" />
        },
        {
            title: "Développer des compétences clés",
            description: "Travaillez sur des compétences transversales comme la communication, le travail d'équipe et la résolution de problèmes.",
            icon: <TrendingUp className="w-6 h-6 text-purple-500" />
        },
        {
            title: "Valoriser ses expériences",
            description: "Chaque expérience, même en dehors du cadre scolaire, peut être formatrice et valorisante pour votre parcours.",
            icon: <Award className="w-6 h-6 text-red-500" />
        },
        {
            title: "Construire son réseau",
            description: "Échangez avec des professionnels, participez à des événements et construisez votre réseau professionnel dès maintenant.",
            icon: <Users className="w-6 h-6 text-indigo-500" />
        }
    ];

    // useEffect(() => {
    //     let interval: NodeJS.Timeout;
    //     const checkStatus = () => {
    //         fetch('/api/orientation-status', { credentials: 'include' })
    //             .then(res => {
    //                 if (res.status === 401) {
    //                     // Redirection vers la page de connexion si non authentifié
    //                     router.visit('/login');
    //                     return;
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log('Status:', data);
    //                 if (data.error) {
    //                     console.error('API Error:', data.error);
    //                     return;
    //                 }
    //                 // setTestDone(!!data.ready);
    //                 // if (data.ready) {
    //                 //     localStorage.setItem('tawjihibot_test_done', '1');
    //                 //     // Redirection automatique si résultat prêt et pas déjà sur la page
    //                 //     const current = window.location.pathname;
    //                 //     if (current !== '/mes-resultats' && current !== '/attente-analyse') {
    //                 //         router.visit('/mes-resultats');
    //                 //     }
    //                 // } else {
    //                 //     localStorage.removeItem('tawjihibot_test_done');
    //                 // }
    //             })
    //             .catch(error => {
    //                 console.error('Error checking status:', error);
    //             });
    //     };
    //     checkStatus();
    //     interval = setInterval(checkStatus, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    // const handleStartTest = () => {
    //     router.visit('/test-orientation');
    // };

    return (
        <AppLayout>
            <Head title="Tableau de Bord" />
            <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-[#8aabb2] p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 text-black">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#2a7686] mb-4">
                            Bienvenue sur votre Espace Étudiant
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Découvrez des conseils et ressources pour réussir votre parcours d'études et préparer votre avenir professionnel.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="bg-white/90 rounded-2xl shadow-xl p-6 md:p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <BookOpen className="w-10 h-10 text-[#2a7686]" />
                                <h2 className="text-2xl font-bold text-[#2a7686]">
                                    Conseils pour réussir vos études
                                </h2>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Voici quelques conseils essentiels pour tirer le meilleur parti de votre expérience éducative et vous préparer à une carrière réussie.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {conseils.map((conseil, index) => (
                            <Card key={index} className="h-full transition-transform hover:scale-105 hover:shadow-lg">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            {conseil.icon}
                                        </div>
                                        <CardTitle className="text-lg">{conseil.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{conseil.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-white/90 rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#2a7686] mb-3">Prêt à passer à l'étape suivante ?</h3>
                                <p className="text-gray-700 mb-4">
                                    Découvrez des ressources supplémentaires, des conseils personnalisés et des opportunités pour votre développement professionnel.
                                </p>
                                <button 
                                    className="bg-[#2a7686] hover:bg-[#23606c] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    Explorer plus de ressources
                                </button>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <CheckCircle className="w-12 h-12 text-[#2a7686] mx-auto mb-3" />
                                <p className="text-center text-gray-700">
                                    Des mises à jour régulières avec les dernières tendances et opportunités éducatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}