import React from "react";
import { StepsData } from "@/components/types";
import "./StepTabs.css";

interface StepTabsProps {
  steps: StepsData;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepTabs: React.FC<StepTabsProps> = ({ steps, currentStep, setCurrentStep }) => (
  <div className="step-tabs">
    {steps.map((step, idx) => (
      <div
        key={step.key}
        className={`step-tab ${idx === currentStep ? "active" : ""}`}
        onClick={() => setCurrentStep(idx)}
        style={{ cursor: 'pointer' }}
      >
        {step.label}
      </div>
    ))}
  </div>
);

export default StepTabs;