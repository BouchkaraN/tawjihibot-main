import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Envoyer le formulaire (API ou Inertia)
        alert('Message envoyé !');
    };

    return (
        <form onSubmit={handleSubmit} className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-1">Nom Complet <span className="text-red-500">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom ici.." className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-1">E-mail <span className="text-red-500">*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Votre e-mail ici..." className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-1">Téléphone <span className="text-red-500">*</span></label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Votre téléphone ici..." className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-1">Sujet <span className="text-red-500">*</span></label>
                <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Votre sujet ici..." className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
            </div>
            <div className="col-span-2">
                <label className="block text-gray-700 font-semibold mb-1">Message <span className="text-red-500">*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Votre message ici..." className="w-full rounded-md bg-gray-100 px-4 py-2 min-h-[100px] outline-none" />
            </div>
            <div className="col-span-2 flex justify-end">
                <button type="submit" className="bg-[#2a7686] text-white font-semibold px-8 py-2 rounded-md hover:bg-[#1a4d5a] transition">Envoyer</button>
            </div>
        </form>
    );
} 