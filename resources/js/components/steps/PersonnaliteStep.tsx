import React from "react";

interface PersonnaliteStepProps {
  value?: string[];
  onChange: (val: string[]) => void;
}

const options = [
  "J'aime suivre des routines et éviter les surprises.",
  "Je suis souvent perdu dans mes pensées et aime réfléchir profondément.",
  "Je suis sensible et suis souvent touché par les arts.",
  "Je préfère travailler en équipe plutôt que seul.",
  "Je n'ai pas peur de prendre des risques pour atteindre mes objectifs.",
  "Je suis toujours organisé et j'aime que les choses soient en ordre.",
  "Je suis souvent qualifié de \"terre à terre\" par mes amis.",
  "J'aime poser des questions sur le monde qui m'entoure.",
  "J'exprime souvent mes sentiments et mes émotions.",
  "Je suis quelqu'un de fiable et les gens viennent souvent me demander de l'aide.",
  "Je suis compétitif et j'aime relever des défis.",
  "Je préfère suivre les règles et les instructions clairement établies.",
  "Je suis pragmatique dans mes décisions.",
  "J'adore apprendre de nouveaux sujets, surtout si c'est complexe.",
  "Je suis créatif et j'aime imaginer de nouvelles idées.",
  "Je fais toujours de mon mieux pour comprendre les sentiments des autres.",
  "J'aime être le leader dans les groupes ou les projets.",
  "Je fais toujours des plans et j'aime respecter les horaires."
];

const PersonnaliteStep: React.FC<PersonnaliteStepProps> = ({ value = [], onChange }) => (
  <div>
    <h3>Quels sont les aspects de votre personnalité ?</h3>
    <p>Choisissez les aspects de votre personnalité qui vous définissent !</p>
    <div className="options-grid">
      {options.map((opt, i) => (
        <label key={i} className="option-card">
          <input
            type="checkbox"
            checked={value.includes(opt)}
            onChange={() =>
              onChange(
                value.includes(opt)
                  ? value.filter((v) => v !== opt)
                  : [...value, opt]
              )
            }
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default PersonnaliteStep;