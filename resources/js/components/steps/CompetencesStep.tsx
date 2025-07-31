import React from "react";

interface CompetencesStepProps {
  value?: { [question: string]: string };
  onChange: (val: { [question: string]: string }) => void;
}

const questions = [
  "Je suis doué pour réparer des objets cassés.",
  "J'aime résoudre des énigmes ou des problèmes scientifiques.",
  "Je peux facilement imaginer des designs ou dessins originaux.",
  "J'ai la capacité d'écouter et comprendre les préoccupations des autres.",
  "Je prends souvent l'initiative dans un groupe pour diriger.",
  "Je suis très organisé et j'aime planifier à l'avance.",
  "Je suis habile de mes mains et j'aime bien bricoler.",
  "La recherche et l'expérimentation me passionnent.",
  "L'art et la musique me permettent de m'exprimer.",
  "Je trouve du plaisir à aider et conseiller les autres.",
  "Je sais motiver les gens autour de moi pour atteindre un objectif.",
  "Je respecte toujours les délais et suis ponctuel.",
  "J'ai un bon sens de l'orientation et je peux facilement assembler des choses.",
  "Je pose souvent des questions pour mieux comprendre un sujet.",
  "Je peux passer des heures à peaufiner un travail créatif.",
  "Je me sens à l'aise lors de discussions en groupe.",
  "Face à un défi, je suis déterminé à le surmonter.",
  "Je tiens toujours mes affaires en ordre et j'aime que tout soit rangé.",
  "Je trouve satisfaction dans le travail manuel.",
  "Je suis curieux et j'aime découvrir de nouvelles informations."
];

const options = ["Non", "Peut-être", "Oui"];

const CompetencesStep: React.FC<CompetencesStepProps> = ({ value = {}, onChange }) => (
  <div>
    <h3>Quels sont vos compétences ?</h3>
    <p>Choisissez la réponse qui vous convient !</p>
    <div className="competences-list">
      {questions.map((q, i) => (
        <div key={i} className="competence-row">
          <span>{q}</span>
          <div className="competence-options">
            {options.map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name={`competence-${i}`}
                  checked={value[q] === opt}
                  onChange={() => onChange({ ...value, [q]: opt })}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CompetencesStep;