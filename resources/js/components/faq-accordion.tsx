import { useState } from 'react';

const questions = [
  {
    question: "Qu'est-ce que TawjihiBot et comment cela peut-il m'aider ?",
    answer:
      "TawjihiBot est une plateforme intelligente d'orientation scolaire et professionnelle qui vous guide dans vos choix post-bac grâce à des tests personnalisés et des recommandations adaptées à votre profil.",
  },
  {
    question: "Comment fonctionnent les tests d'orientation sur TawjihiBot ?",
    answer:
      "Nos tests analysent votre personnalité, vos intérêts et vos compétences pour vous proposer des filières et établissements qui vous correspondent réellement.",
  },
  {
    question: "À part les tests d'orientation, quelles autres fonctionnalités offre TawjihiBot ?",
    answer:
      "TawjihiBot propose une base de données complète des écoles, des conseils personnalisés, un suivi des concours et un accompagnement dans vos démarches d'inscription.",
  },
  {
    question: "Pourquoi devrais-je utiliser TawjihiBot plutôt qu'une autre plateforme ou un conseiller d'orientation ?",
    answer:
      "TawjihiBot centralise toutes les informations utiles, propose un accompagnement 100% digital, et s'appuie sur l'intelligence artificielle pour des recommandations objectives et personnalisées.",
  },
  {
    question: "Comment TawjihiBot garantit-il la précision de ses recommandations ?",
    answer:
      "Nos algorithmes sont conçus par des experts en orientation et sont régulièrement mis à jour pour refléter les évolutions du système éducatif marocain.",
  },
  {
    question: "J'ai d'autres questions ou des préoccupations, comment puis-je contacter l'équipe de TawjihiBot ?",
    answer:
      "Vous pouvez nous écrire directement via le formulaire de la section contact ci-dessous, nous vous répondrons dans les plus brefs délais.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {questions.map((q, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left py-4 focus:outline-none flex items-center justify-between"
            onClick={() => handleClick(idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-[#2a7686] text-lg">{q.question}</span>
            <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openIndex === idx && (
            <div className="pb-4 pl-2 pr-2 text-gray-700 animate-fade-in">
              {q.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 