import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLogoIcon from '../components/app-logo-icon';
import ContactForm from '../components/contact-form';
import { useState } from 'react';
import FAQAccordion from '../components/faq-accordion';
import { motion } from 'framer-motion';

export default function Landing() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="TawjihiBot - Votre guide d'orientation universitaire">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-[#8aabb2] to-[#1a4d5a]">
                {/* Top Navigation Bar */}
                <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex aspect-square size-17 items-center justify-center rounded-md text-sidebar-primary-foreground">
                                <AppLogoIcon />
                            </div>

                            {/* Main Navigation Links */}
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-white hover:text-white/80 transition-colors">
                                    Accueil
                                </Link>
                                <Link href="/chatbot" className="text-white hover:text-white/80 transition-colors">
                                    Chatbot
                                </Link>
                                <Link href="/ecoles-universites" className="text-white hover:text-white/80 transition-colors">
                                Ecoles et Universités
                                </Link>
                                <Link href="/concours" className="text-white hover:text-white/80 transition-colors">
                                    Liste des concours
                                </Link>
                                <Link href="/about" className="text-white hover:text-white/80 transition-colors">
                                    À propos
                                </Link>
                                <div className="relative group">
                                    <button className="text-[#2a7686] hover:text-[#1a4d5a] transition-colors flex items-center">
                                        Support
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block z-50">
                                        <a href="#faq" className="block px-4 py-2 text-[#2a7686] hover:bg-[#2a7686]/10">
                                            Q&amp;A
                                        </a>
                                        <a href="#contact" className="block px-4 py-2 text-[#2a7686] hover:bg-[#2a7686]/10">
                                            Contactez-nous
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Auth Buttons */}
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link href={route('dashboard')}>
                                        <Button variant="outline" className="text-[#2a7686] border-white hover:bg-white/10">
                                            mon compte
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')}>
                                            <Button variant="ghost" className="text-[#2a7686] hover:bg-white/10">
                                                Connexion
                                            </Button>
                                        </Link>
                                        <Link href={route('register')}>
                                            <Button className="bg-white text-[#2a7686] hover:bg-white/90">
                                                Inscription
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="container mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                        {/* Texte à gauche */}
                        <div className="md:w-2/3 flex flex-col justify-center items-start text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                                <span className="block">Tawjih au Maroc</span>
                                <span className="block text-[#e0f7fa]">Où étudier après le BAC&nbsp;?</span>
                            </h1>
                            <div className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                <p className="mb-3">
                                    <span className="font-semibold text-white">Vous hésitez entre plusieurs filières&nbsp;?</span> Vous avez peur de faire un choix qui ne vous ressemble pas&nbsp;?
                                </p>
                                <p className="mb-3">
                                    <span className="font-semibold text-white">TawjihiBot</span>, votre conseiller virtuel basé sur l'intelligence artificielle, analyse vos préférences, vos points forts et vos ambitions pour vous proposer les parcours d'études et les écoles qui vous correspondent le mieux.
                                </p>
                                <p>
                                    Faites confiance à l'IA pour vous orienter vers un avenir qui vous inspire&nbsp;!
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4  p-4 rounded-xl ">
                                <Link href={route('register')}>
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#2a7686] border-2 border-[#2a7686] font-bold px-8 py-3 text-lg shadow-md hover:bg-[#e0f7fa] hover:text-[#1a4d5a] transition-colors"
                                    >
                                        Commencer maintenant
                                    </Button>
                                </Link>
                                <Link href="#features">
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#2a7686] border-2 border-[#2a7686] font-bold px-8 py-3 text-lg shadow-md hover:bg-[#e0f7fa] hover:text-[#1a4d5a] transition-colors"
                                    >
                                        En savoir plus
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        {/* Image à droite */}
                        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
                            <img src="/images/TawjihiBot1.png" alt="TawjihiBot"  />
                        </div>
                    </div>
                </div>

                {/* Présentation de l'app */}
                <div className="bg-white py-16">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl">
                        {/* Image à gauche */}
                        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                            <img src="/images/TawjihiBot.png" alt="TawjihiBot" className="max-w-xs w-full rounded-lg " />
                        </div>
                        {/* Texte à droite */}
                        <motion.div
                            className="md:w-2/3 text-gray-800 text-base md:text-lg space-y-6 w-full self-center leading-relaxed text-justify"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false }}
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                                <span className="font-bold text-2xl text-[#2a7686]">TawjihiBot</span>
                                <span className="font-semibold">
                                    – Votre <a href="#" className="text-[#2a7686] underline">conseiller intelligent</a> pour trouver une école supérieure !
                                </span>
                            </div>
                            <p>
                                Choisir une filière ou une école supérieure est une décision cruciale qui impacte profondément le parcours académique et professionnel des jeunes. <a href="#" className="text-[#2a7686] underline">Mal orientés</a>, de nombreux bacheliers se retrouvent dans des études qu'ils n'aiment pas, menant souvent à un désintérêt ou à une réorientation tardive.
                            </p>
                            <p>
                                <span className="font-bold text-[#2a7686]">TawjihiBot</span> est une <a href="#" className="text-[#2a7686] underline">plateforme intelligente d'orientation</a> scolaire et professionnelle, conçue spécialement pour les élèves du baccalauréat. Grâce à la <a href="#" className="text-[#2a7686] underline">puissance de l'intelligence artificielle</a>, <span className="font-bold text-[#2a7686]">TawjihiBot</span> analyse le profil, les centres d'intérêt et les compétences de chaque utilisateur pour lui recommander les écoles, universités et filières les plus adaptées, au Maroc comme à l'international.
                            </p>
                            <p>
                                Notre mission est simple : <a href="#" className="text-[#2a7686] underline">accompagner chaque étudiant vers un avenir épanoui et éclairé</a>, en l'aidant à faire un choix réfléchi et personnalisé.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* Features Section */}
                <div id="features" className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-[#2a7686] mb-12">
                            Nos Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-[#2a7686]/5 rounded-lg">
                                <div className="text-[#2a7686] text-2xl mb-4">🤖</div>
                                <h3 className="text-xl font-semibold text-[#2a7686] mb-2">
                                    Assistant Intelligent
                                </h3>
                                <p className="text-gray-600">
                                    Un chatbot personnalisé pour répondre à toutes vos questions sur l'orientation universitaire.
                                </p>
                            </div>
                            <div className="p-6 bg-[#2a7686]/5 rounded-lg">
                                <div className="text-[#2a7686] text-2xl mb-4">🎓</div>
                                <h3 className="text-xl font-semibold text-[#2a7686] mb-2">
                                    Base de Données Complète
                                </h3>
                                <p className="text-gray-600">
                                    Accédez à toutes les informations sur les établissements supérieurs marocains.
                                </p>
                            </div>
                            <div className="p-6 bg-[#2a7686]/5 rounded-lg">
                                <div className="text-[#2a7686] text-2xl mb-4">📋</div>
                                <h3 className="text-xl font-semibold text-[#2a7686] mb-2">
                                    Concours et Inscriptions
                                </h3>
                                <p className="text-gray-600">
                                    Restez informé des dates importantes et des procédures d'inscription.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <motion.div
                    className="bg-gradient-to-b from-[#2a7686] to-[#1a4d5a] py-20"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Comment s'orienter ?</h2>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto">
                                Un parcours simple et personnalisé pour trouver votre voie dans l'enseignement supérieur marocain
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Step 1 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2a7686] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        1
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2a7686]">Création du compte</h3>
                                </div>
                                <p className="text-gray-600">
                                    Commencez par vous inscrire sur TawjihiBot pour accéder à tous nos services d'orientation personnalisés.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2a7686] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        2
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2a7686]">Tests d'orientation</h3>
                                </div>
                                <p className="text-gray-600">
                                    Passez notre test d'orientation spécialisé pour les bacheliers, permettant d'analyser votre personnalité, vos intérêts et vos soft-skills.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2a7686] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        3
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2a7686]">Exploration des résultats</h3>
                                </div>
                                <p className="text-gray-600">
                                    Recevez un bilan détaillé de votre profil avec des recommandations personnalisées sur les secteurs et filières qui vous correspondent.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2a7686] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        4
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2a7686]">Trouvez votre filière</h3>
                                </div>
                                <p className="text-gray-600">
                                    Découvrez les filières et écoles qui correspondent à votre profil, en tenant compte de vos préférences géographiques et de vos aspirations.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2a7686] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        5
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2a7686]">Inscription simplifiée</h3>
                                </div>
                                <p className="text-gray-600">
                                    Notre algorithme intelligent analyse votre situation et vous propose les écoles les plus adaptées. Choisissez parmi les options recommandées et procédez à l'inscription.
                                </p>
                            </div>

                            {/* Call to Action Card */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                                <div className="flex flex-col items-center text-center">
                                    <h3 className="text-xl font-semibold text-[#2a7686] mb-4">Prêt à commencer ?</h3>
                                    <p className="text-gray-600 mb-6">
                                        Rejoignez TawjihiBot aujourd'hui et découvrez votre voie vers le succès universitaire !
                                    </p>
                                    <Link href={route('register')}>
                                        <Button size="lg" className="bg-[#2a7686] text-white hover:bg-[#1a4d5a]">
                                            Commencer maintenant
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Q&A Section */}
                <motion.div
                    id="faq"
                    className="bg-white py-20 border-t border-b border-gray-100"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#2a7686] mb-4">Questions/Réponses</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                Si vous n'arrivez pas à trouver une réponse, vous pouvez nous contacter en laissant un message dans la section contact !
                            </p>
                        </div>
                        <FAQAccordion />
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    id="contact"
                    className="bg-white py-20"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#2a7686] mb-4">Contactez-nous</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Envoyez-nous votre message et l'un de nos collaborateurs vous répondra dès que possible !</p>
                        </div>
                        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-10">
                            {/* Infos de contact */}
                            <div className="md:w-1/3 space-y-6">
                                <div>
                                    <div className="uppercase text-xs text-gray-400 font-bold mb-1">Email:</div>
                                    <a href="mailto:contact@e-tawjihi.ma" className="text-[#297585] font-semibold text-lg">contact@tawjihibot.ma</a>
                                </div>
                                <div>
                                    <div className="uppercase text-xs text-gray-400 font-bold mb-1">Téléphone:</div>
                                    <a href="tel:0660518125" className="text-[#297585] font-semibold text-lg">06 29 42 45 14</a>
                                </div>

                            </div>
                            {/* Formulaire */}
                            <ContactForm />
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <footer className="bg-[#0b4c5c] text-gray-100 pt-10 pb-4 mt-10">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                        {/* Bloc logo + description */}
                        <div className="md:w-1/4 flex flex-col items-center md:items-start">
                            {/* Logo */}
                            <div className="flex aspect-square size-17 items-center justify-center rounded-md text-sidebar-primary-foreground">
                                <AppLogoIcon />
                            </div>
                            <span className="font-bold text-lg mb-2">TawjihiBot</span>
                            <p className="text-sm text-gray-200">
                                Plateforme d'orientation scolaire & professionnelle<br />
                                Nous proposons des outils d'orientation aux jeunes étudiants pour les aider à faire face aux confusions et trouver leur voie dans ce vaste monde !
                            </p>
                        </div>
                        {/* Bloc liens utiles */}
                        <div className="md:w-1/4">
                            <div className="font-bold mb-2">Liens utiles</div>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                                <li><a href="/" className="hover:underline text-gray-100">Accueil</a></li>
                                <li><a href="/ecoles" className="hover:underline text-gray-100">Les écoles supérieures</a></li>
                                <li><a href="/secteurs" className="hover:underline text-gray-100">Secteurs d'études</a></li>
                                <li><a href="/conseils" className="hover:underline text-gray-100">Conseils et Orientation</a></li>
                                <li><a href="/espace-pro" className="hover:underline text-gray-100">Espace professionnelle</a></li>
                            </ul>
                        </div>
                        {/* Bloc support */}
                        <div className="md:w-1/4">
                            <div className="font-bold mb-2">Support</div>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                                <li><a href="#faq" className="hover:underline text-gray-100">Questions/Réponses</a></li>
                                <li><a href="#contact" className="hover:underline text-gray-100">Contact</a></li>
                            </ul>
                        </div>
                        {/* Bloc mentions légales */}
                        <div className="md:w-1/4">
                            <div className="font-bold mb-2">Mentions légales</div>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                                <li><a href="/terms" className="hover:underline text-gray-100">Conditions d'utilisation</a></li>
                                <li><a href="/privacy" className="hover:underline text-gray-100">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-xs text-gray-200 mt-8">
                        © 2025 TawjihiBot. Tous droits réservés.
                    </div>
                </footer>
            </div>
        </>
    );
} 