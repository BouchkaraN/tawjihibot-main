import { Head } from '@inertiajs/react';

export default function Terms() {
    return (
        <>
            <Head title="Conditions d'utilisation" />
            <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-[#2a7686]">Conditions d'utilisation</h1>
                    <p className="mb-4 text-gray-700">Bienvenue sur TawjihiBot. En utilisant notre plateforme, vous acceptez les conditions suivantes :</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li>Vous vous engagez à fournir des informations exactes lors de votre inscription.</li>
                        <li>Vous ne devez pas utiliser la plateforme à des fins illégales ou frauduleuses.</li>
                        <li>Le contenu et les recommandations sont fournis à titre informatif et ne remplacent pas un conseil professionnel personnalisé.</li>
                        <li>Nous nous réservons le droit de modifier ces conditions à tout moment.</li>
                    </ul>
                    <p className="text-gray-600 text-sm">Pour toute question, contactez-nous à <a href="mailto:contact@e-tawjihi.ma" className="text-[#2a7686] underline">contact@e-tawjihi.ma</a>.</p>
                </div>
            </div>
        </>
    );
} 