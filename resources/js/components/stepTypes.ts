export type InteretsValue = string[];
export type MetiersValue = string[];
export type SkillsValue = Record<string, boolean>;
export type PersonalityValue = Record<string, number>;
export type PreferencesValue = {
  universite?: string;
  services?: string[];
  budget?: string;
  etranger?: string;
};
export type SummaryValue = {
  interests: string[];
  careers: string[];
  skills: Record<string, boolean>;
  personality: Record<string, number>;
  preferences: PreferencesValue;
};
