import React, { useState } from "react";
import steps from "./stepsData";
import { StepType } from "./types";
import StepTabs from "./StepTabs";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

interface ErrorResponse {
  message?: string;
  [key: string]: any;
};

// Configure axios defaults
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
axios.defaults.withCredentials = true;
import "./OrientationTest.css";
import "./StepTabs.css";

type AnswersType = {
  [key: string]: any;
};

const OrientationTest: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswersType>({});

  const handleNext = () => setCurrentStep((s) => s + 1);
  const handlePrev = () => setCurrentStep((s) => s - 1);

  const handleChange = (stepKey: string, value: any) => {
    console.log(`Changement de valeur pour l'étape ${stepKey}:`, value);
    setAnswers({ ...answers, [stepKey]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log('Soumission des réponses:', answers);
      
      // Récupérer le token d'authentification
      const token = localStorage.getItem('auth_token');
      if (!token) {
        alert('Veuillez vous connecter pour soumettre le test');
        window.location.href = '/login';
        return;
      }
      
      const response = await axios.post("/api/orientation/answers", 
        { answers },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          withCredentials: true
        }
      );
      
      console.log('Réponse complète du serveur:', response);
      
      console.log('Réponse du serveur:', response.data);
      
      // Vérifier si la réponse contient une redirection
      if (response.data.redirect) {
        // Marquer le test comme terminé dans le stockage local
        localStorage.setItem('tawjihibot_test_done', '1');
        localStorage.setItem('tawjihibot_has_results', '1');
        
        // Rediriger vers la page spécifiée dans la réponse
        console.log('Redirection vers:', response.data.redirect);
        window.location.href = response.data.redirect;
      } else if (response.data.success) {
        // Gestion de l'ancien format de réponse pour la rétrocompatibilité
        localStorage.setItem('tawjihibot_test_done', '1');
        localStorage.setItem('tawjihibot_has_results', '1');
        window.location.href = "/attente-analyse";
      } else {
        throw new Error('Réponse inattendue du serveur');
      }
    } catch (error: unknown) {
      console.error('Erreur de soumission:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Réponse du serveur:', axiosError.response?.data);
        console.error('Statut:', axiosError.response?.status);
        
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            alert("Vous devez être connecté pour soumettre les réponses. Veuillez vous connecter.");
          } else if (axiosError.response.status === 422) {
            alert("Erreur de validation des données. Vérifiez que toutes les réponses sont valides.");
          } else {
            const errorData = axiosError.response.data as ErrorResponse;
          alert(`Erreur ${axiosError.response.status}: ${errorData.message || 'Une erreur est survenue'}`);
          }
        } else {
          alert("Erreur réseau: Impossible de se connecter au serveur. Vérifiez votre connexion internet.");
        }
      } else {
        alert("Une erreur inattendue est survenue. Vérifiez les logs dans la console.");
      }
    }
  };

  // Validation pour chaque étape
  const isStepValid = () => {
    const stepKey = steps[currentStep].key;
    const value = answers[stepKey];
    if (stepKey === 'skills') {
      // Pour compétences, il faut une réponse pour chaque question
      return value && typeof value === 'object' && Object.keys(value).length === 20 && Object.values(value).every(v => v === 'Non' || v === 'Peut-être' || v === 'Oui');
    }
    // Pour les autres étapes, il faut au moins une réponse (array non vide ou string non vide)
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (typeof value === 'object' && value !== null) {
      // Pour préférences, il faut au moins un champ rempli
      return Object.values(value).some(v => (Array.isArray(v) ? v.length > 0 : !!v));
    }
    return !!value;
  };

  const StepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-[#8aabb2] flex flex-col items-center justify-center py-10">
    <div className="orientation-test-container">
      <StepTabs steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="step-content">
        <StepComponent
          value={answers[steps[currentStep].key]}
          onChange={(val: any) => handleChange(steps[currentStep].key, val)}
        />
      </div>
      <div className="step-navigation">
        {currentStep > 0 && (
          <button onClick={handlePrev} className="btn-prev">Précédent</button>
        )}
        {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} className="btn-next" disabled={!isStepValid()}>Suivant</button>
        ) : (
          <button onClick={handleSubmit} className="btn-submit">Terminer</button>
        )}
        </div>
      </div>
    </div>
  );
};

export default OrientationTest;