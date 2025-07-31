export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export type OrientationStep = 'interests' | 'careers' | 'skills' | 'personality' | 'preferences' | 'summary';

export interface OrientationAnswer {
  question: string;
  answer: string | number | boolean | string[];
}

export interface StepProps<T> {
  value: T;
  onChange: (value: T) => void;
}

export type StepData<T> = {
  key: OrientationStep;
  label: string;
  component: React.ComponentType<StepProps<T>>;
};

export type StepsData = Array<
  | StepData<string[]>
  | StepData<{ [question: string]: string }>
  | StepData<{ [question: string]: boolean }>
  | StepData<{ [question: string]: number }>
  | StepData<{
      universite?: string;
      services?: string[];
      budget?: string;
      etranger?: string;
    }>
  | StepData<{
      interests: string[];
      careers: { [question: string]: string };
      skills: { [question: string]: boolean };
      personality: { [question: string]: number };
      preferences: {
        universite?: string;
        services?: string[];
        budget?: string;
        etranger?: string;
      };
    }>
>;

export type StepType = StepData<string[]> | StepData<{ [question: string]: string }> | StepData<{ [question: string]: boolean }> | StepData<{ [question: string]: number }> | StepData<{
      universite?: string;
      services?: string[];
      budget?: string;
      etranger?: string;
    }> | StepData<{
      interests: string[];
      careers: { [question: string]: string };
      skills: { [question: string]: boolean };
      personality: { [question: string]: number };
      preferences: {
        universite?: string;
        services?: string[];
        budget?: string;
        etranger?: string;
      };
    }>;
