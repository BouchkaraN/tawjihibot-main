// import { useEffect, useState } from 'react';

// export default function AttenteAnalyse() {
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     const checkStatus = async () => {
//       try {
//         console.log('Vérification du statut...');
//         const token = localStorage.getItem('auth_token');
//         const res = await fetch('/api/orientation-status', {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'Authorization': `Bearer ${token}`
//           },
//           credentials: 'include'
//         });
        
//         console.log('Statut de la réponse:', res.status);
        
//         if (res.status === 401) {
//           // Rediriger vers la page de connexion si non authentifié
//           window.location.href = '/login';
//           return;
//         }
        
//         const data = await res.json();
//         console.log('Données du statut:', data);
        
//         if (data.ready || data.has_results) {
//           console.log('Redirection vers les résultats...');
//           window.location.href = '/mes-resultats';
//         }

//       } catch (error: unknown) {
//         console.error('Erreur de vérification du statut:', error);
//         if (error instanceof Error) {
//           console.error('Message d\'erreur:', error.message);
//         }
//         if (error && typeof error === 'object' && 'response' in error) {
//           const axiosError = error as { response: { data: any, status: number } };
//           console.error('Réponse du serveur:', axiosError.response.data);
//           console.error('Statut:', axiosError.response.status);
//           if (axiosError.response.status === 401) {
//             setError('Veuillez vous connecter pour accéder à vos résultats');
//           }
//         } else {
//           setError('Erreur lors de la vérification du statut');
//         }
//       }
//     };
//     checkStatus();
//     interval = setInterval(checkStatus, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e0f7fa] to-[#8aabb2]">
//       <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
//         {error && <div className="error-message text-red-500 mb-4">{error}</div>}
//         <div className="mb-4 animate-spin-slow">
//           <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="32" cy="32" r="28" stroke="#2a7686" strokeWidth="8" strokeDasharray="44 88" />
//           </svg>
//         </div>
//         <h2 className="text-2xl font-bold text-[#2a7686] mb-2">Analyse en cours...</h2>
//         <p className="text-gray-600 text-center max-w-xs">Votre test est en cours d'analyse par notre IA. Cette étape peut prendre quelques secondes. Vous serez redirigé automatiquement vers vos résultats dès qu'ils seront prêts.</p>
//       </div>
//     </div>
//   );
// }