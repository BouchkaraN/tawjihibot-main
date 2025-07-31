import InteretsStep from "./steps/InteretsStep";
import MetiersStep from "./steps/MetiersStep";
import CompetencesStep from "./steps/CompetencesStep";
import PersonnaliteStep from "./steps/PersonnaliteStep";
import PreferencesStep from "./steps/PreferencesStep";
import TerminerStep from "./steps/TerminerStep";
import { StepsData } from "@/components/types";

const steps: StepsData = [
  { 
    key: "interests", 
    label: "Intérêts", 
    component: InteretsStep 
  },
  { 
    key: "careers", 
    label: "Métiers", 
    component: MetiersStep 
  },
  { 
    key: "skills", 
    label: "Compétences", 
    component: CompetencesStep 
  },
  { 
    key: "personality", 
    label: "Personnalité", 
    component: PersonnaliteStep 
  },
  { 
    key: "preferences", 
    label: "Préférences", 
    component: PreferencesStep 
  },
  { 
    key: "summary", 
    label: "Terminer", 
    component: TerminerStep 
  }
] as const;

export default steps;