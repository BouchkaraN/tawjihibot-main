import React from 'react';
import { StepProps } from '@/components/types';

interface BaseStepProps<T> extends StepProps<T> {
  questions: string[];
  options: string[];
}

const BaseStep: React.FC<BaseStepProps<string[]>> = ({ questions, options, value = [], onChange }) => {
  const handleChange = (index: number, selected: string[]) => {
    const newValue = [...value];
    newValue[index] = selected[0];
    onChange(newValue);
  };

  return (
    <div className="step-content">
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>{question}</p>
          <select
            value={value[index] || ''}
            onChange={(e) => handleChange(index, [e.target.value])}
            className="form-select"
          >
            <option value="">Choisir...</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default BaseStep;
