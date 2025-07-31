import React from "react";
import { StepProps } from "@/components/types";
import "../StepTabs.css";

const options = [
  "J'aime bien bricoler ou assembler des choses.",
  "La science et la recherche m'intéressent beaucoup.",
  "Je trouve du plaisir à dessiner ou à créer des choses.",
  "J'aime discuter et conseiller mes amis quand ils ont des problèmes.",
  "Dans un groupe, je prends souvent le rôle de leader.",
  "Organiser et planifier des tâches est quelque chose que je fais bien.",
  "Travailler avec des outils ou des machines m'attire.",
  "Les énigmes et les puzzles me passionnent.",
  "Je suis souvent inspiré par la musique et l'art.",
  "J'aime participer à des activités de groupe ou communautaires.",
  "Je me sens à l'aise de prendre des décisions pour un groupe.",
  "Je suis minutieux et j'accorde de l'importance aux détails.",
  "Les travaux manuels, comme le jardinage ou la menuiserie, m'intéressent.",
  "Je suis toujours curieux d'apprendre de nouvelles choses.",
  "Exprimer mes sentiments à travers l'art me plaît.",
  "J'apprécie le temps passé à aider ou enseigner aux autres.",
  "J'aime les défis et la compétition.",
  "Je préfère travailler dans un environnement structuré et organisé.",
  "Construire ou réparer des choses m'apporte de la satisfaction.",
  "J'aime poser des questions et explorer des idées nouvelles."
];

const InteretsStep: React.FC<StepProps<string[]>> = ({ value = [], onChange }) => (
  <div>
    <h3>Quels sont vos Intérêts ?</h3>
    <p>Choisissez les activités qui vous intéressent !</p>
    <div className="options-grid">
      {options.map((opt, i) => (
        <label key={i} className="option-card">
          <input
            type="checkbox"
            checked={value.includes(opt)}
            onChange={() =>
              onChange(
                value.includes(opt)
                  ? value.filter((v: string) => v !== opt)
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

export default InteretsStep;