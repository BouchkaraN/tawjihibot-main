import React from "react";

interface MetiersStepProps {
  value?: string[];
  onChange: (val: string[]) => void;
}

const options = [
  "Mécanicien",
  "Chercheur en biologie",
  "Designer graphique",
  "Conseiller d'orientation",
  "Chef d'entreprise",
  "Comptable",
  "Électricien",
  "Technicien de laboratoire",
  "Musicien",
  "Infirmier",
  "Responsable de marketing",
  "Secrétaire administratif",
  "Agriculteur",
  "Développeur informatique",
  "Photographe",
  "Éducateur spécialisé",
  "Manager de vente",
  "Coordinateur d'événements",
  "Technicien en construction",
  "Analyste environnemental"
];

const MetiersStep: React.FC<MetiersStepProps> = ({ value = [], onChange }) => (
  <div>
    <h3>Quels sont les métiers qu'aimeriez vous faire ?</h3>
    <p>Choisissez les métiers qui vous intéressent !</p>
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

export default MetiersStep;