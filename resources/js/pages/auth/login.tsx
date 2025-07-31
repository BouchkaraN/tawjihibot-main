import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#8aabb2] to-[#1a4d5a] py-10">
            <Head title="Connexion" />
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
                {/* Image à gauche */}
                <div className="md:w-1/2 relative flex items-center justify-center p-0 overflow-hidden bg-[#c0d0d4] min-h-[500px]">
                  {/* Image de fond */}
                  <img
                    src="/images/TawjihiBot.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 1 }}
                  />
                  {/* Overlay coloré */}
                  <div className="absolute inset-0 bg-[#4e93a2] opacity-80" style={{ zIndex: 2 }} />
                  {/* Logo en haut à gauche */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col items-start">
                    <img src="/images/tawjihi_logo.png" alt="TawjihiBot" className="h-20 mb-1" />
                  </div>
                  {/* Citation en bas */}
                  <div className="absolute bottom-10 left-0 w-full flex flex-col items-center z-10">
                    <span className="text-4xl text-green-400 mb-2">"</span>
                    <p className="text-white text-center text-lg font-medium px-6">
                      La réussite n'est pas le fruit du hasard, mais le résultat d'un travail acharné.
                    </p>
                    <div className="flex gap-2 mt-4">
                      
                    </div>
                  </div>
                </div>
                {/* Formulaire à droite */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-[#2a7686] mb-2">Connexion</h1>
                    <p className="text-md text-gray-600 mb-6">Connectez-vous à TawjihiBot pour accéder à votre espace personnalisé.</p>
                    <form className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Adresse e-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoFocus
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                    className="rounded-lg"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Mot de passe</Label>
                                    {canResetPassword && (
                                        <TextLink href={route('password.request')} className="ml-auto text-sm">
                                            Mot de passe oublié ?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Mot de passe"
                                    className="rounded-lg"
                                />
                                <InputError message={errors.password} />
                            </div>
                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onClick={() => setData('remember', !data.remember)}
                                />
                                <Label htmlFor="remember">Se souvenir de moi</Label>
                            </div>
                            <Button type="submit" className="mt-2 w-full bg-[#2a7686] text-white font-bold py-3 rounded-lg hover:bg-[#1a4d5a] transition" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}Se connecter
                            </Button>
                        </div>
                        <div className="text-center text-sm text-gray-500">
                            Vous n'avez pas de compte ?{' '}
                            <TextLink href={route('register')}>
                                Créer un compte
                            </TextLink>
                        </div>
                    </form>
                    {status && <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>}
                </div>
            </div>
        </div>
    );
}
