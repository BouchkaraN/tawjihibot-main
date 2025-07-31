import React from "react";
import { StepProps } from "@/components/types";

interface PreferencesStepValue {
  universite?: string;
  services?: string[];
  budget?: string;
  etranger?: string;
}

const universites = ["Public", "Privé", "Les deux"];
const services = [
  "Inscription aux écoles publiques",
  "Inscription aux écoles privée",
  "Orientation avec un conseillé",
  "Service d'études à l'étranger"
];
const budgets = [
  "Moins de 5000Dhs/Mois",
  "Entre 5000 et 10000Dhs/Mois",
  "Plus de 10000 Dhs/Mois"
];

const PreferencesStep: React.FC<StepProps<PreferencesStepValue>> = ({ value = {}, onChange }) => (
  <div>
    <h3>Quels sont vos préférences ?</h3>
    <p>Choisissez vos préférences !</p>
    <div className="preferences-section">
      <div>
        <label>Préférez-vous étudier dans une université publique, privée, ou les deux ?</label>
        <div>
          {universites.map((u) => (
            <label key={u}>
              <input
                type="radio"
                name="universite"
                checked={value.universite === u}
                onChange={() => onChange({ ...value, universite: u })}
              />
              {u}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>Quels sont les services qui t'intéressent ?</label>
        <div>
          {services.map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={value.services?.includes(s) || false}
                onChange={() =>
                  onChange({
                    ...value,
                    services: value.services?.includes(s)
                      ? value.services.filter((v) => v !== s)
                      : [...(value.services || []), s]
                  })
                }
              />
              {s}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>Quel est votre budget mensuel ?</label>
        <div>
          {budgets.map((b) => (
            <label key={b}>
              <input
                type="radio"
                name="budget"
                checked={value.budget === b}
                onChange={() => onChange({ ...value, budget: b })}
              />
              {b}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>Êtes-vous intéressé par les études à l'étranger ?</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={value.etranger === "oui"}
              onChange={() => onChange({ ...value, etranger: value.etranger === "oui" ? undefined : "oui" })}
            />
            Oui
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default PreferencesStep;