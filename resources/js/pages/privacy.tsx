import { Head } from '@inertiajs/react';

export default function Privacy() {
    return (
        <>
            <Head title="Politique de confidentialité" />
            <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-[#2a7686]">Politique de confidentialité</h1>
                    <p className="mb-4 text-gray-700">Chez TawjihiBot, la protection de vos données personnelles est une priorité :</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li>Vos informations personnelles sont utilisées uniquement pour améliorer votre expérience sur la plateforme.</li>
                        <li>Nous ne partageons pas vos données avec des tiers sans votre consentement.</li>
                        <li>Vous pouvez demander la suppression de votre compte et de vos données à tout moment.</li>
                        <li>Nous mettons en œuvre des mesures de sécurité pour protéger vos informations.</li>
                    </ul>
                    <p className="text-gray-600 text-sm">Pour toute question relative à la confidentialité, contactez-nous à <a href="mailto:contact@e-tawjihi.ma" className="text-[#2a7686] underline">contact@e-tawjihi.ma</a>.</p>
                </div>
            </div>
        </>
    );
} 