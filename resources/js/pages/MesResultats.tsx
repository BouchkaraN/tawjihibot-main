// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Trash2 } from 'lucide-react';

// interface Profil {
//   nom: string;
//   score: number;
//   description: string;
// }
// interface Skill {
//   nom: string;
//   score: number;
//   description: string;
// }
// interface Interet {
//   nom: string;
//   score: number;
//   description: string;
// }
// interface Preferences {
//   université: string;
//   budget: string;
//   "étudiant étranger": string;
// }
// interface Service {
//   nom: string;
//   description: string;
// }
// interface Resultats {
//   score_total?: number;
//   profils?: Profil[];
//   soft_skills?: Skill[];
//   intérêts?: Interet[];
//   personnalité?: string[];
//   préférences?: Preferences;
//   services?: Service[];
// }

// function CircleProgress({ percent, color }: { percent: number; color: string }) {
//   const radius = 36;
//   const stroke = 7;
//   const normalizedRadius = radius - stroke * 2;
//   const circumference = normalizedRadius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (percent / 100) * circumference;
//   return (
//     <svg height={radius * 2} width={radius * 2}>
//       <circle
//         stroke="#e5e7eb"
//         fill="transparent"
//         strokeWidth={stroke}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//       />
//       <circle
//         stroke={color}
//         fill="transparent"
//         strokeWidth={stroke}
//         strokeLinecap="round"
//         strokeDasharray={circumference + ' ' + circumference}
//         style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//       />
//       <text x="50%" y="54%" textAnchor="middle" fontSize="1.2em" fill={color} fontWeight="bold" dy=".3em">{percent}%</text>
//     </svg>
//   );
// }

// export default function MesResultats() {
//   const [resultats, setResultats] = useState<Resultats | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [personnalite, setPersonnalite] = useState<string[]>([]);
//   const [softSkills, setSoftSkills] = useState<Skill[]>([]);
//   const [newPerso, setNewPerso] = useState('');
//   const [newSkill, setNewSkill] = useState('');

//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined;
//     let statusInterval: NodeJS.Timeout | undefined;
//     let isMounted = true;

//     const fetchResults = async () => {
//       try {
//         const token = localStorage.getItem('auth_token');
//         if (!token) {
//           window.location.href = '/login';
//           return;
//         }

//         // Vérifier le statut de l'analyse
//         const statusResponse = await axios.get('/api/orientation/status', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json'
//           }
//         });

//         console.log('Statut des résultats:', statusResponse.data);

//         if (statusResponse.data.has_results) {
//           // Récupérer les résultats
//           const resultsResponse = await axios.get('/api/orientation/result', {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Accept': 'application/json'
//             }
//           });

//           console.log('Résultats récupérés:', resultsResponse.data);
          
//           if (isMounted) {
//             const resultData = resultsResponse.data.data || {};
//             setResultats(resultData);
//             setPersonnalite(resultData.personnalité || []);
//             setSoftSkills(resultData.soft_skills || []);
//             setLoading(false);
//           }
//         } else {
//           if (isMounted) {
//             setError("Analyse en cours ou test non complété. Veuillez patienter ou faire le test d'orientation.");
//             setLoading(false);
            
//             // Vérifier à nouveau après 5 secondes
//             statusInterval = setTimeout(fetchResults, 5000);
//           }
//         }
//       } catch (error) {
//         console.error('Erreur lors de la récupération des résultats:', error);
        
//         if (isMounted) {
//           if (axios.isAxiosError(error) && error.response?.status === 401) {
//             // Non authentifié, rediriger vers la page de connexion
//             window.location.href = '/login';
//           } else {
//             setError('Erreur lors du chargement des résultats. Veuillez réessayer.');
//             setLoading(false);
//           }
//         }
//       }
//     };

//     fetchResults();

//     return () => {
//       isMounted = false;
//       clearInterval(interval);
//       clearTimeout(statusInterval);
//     };
//   }, []);

//   // Suppression personnalité
//   const removePerso = (item: string) => setPersonnalite(personnalite.filter(p => p !== item));
  
//   // Ajout personnalité
//   const addPerso = async () => {
//     if (!newPerso.trim() || personnalite.includes(newPerso.trim())) return;
    
//     const token = localStorage.getItem('auth_token');
//     if (!token) {
//       window.location.href = '/login';
//       return;
//     }

//     const newPersonnalite = [...personnalite, newPerso.trim()];
    
//     try {
//       const response = await axios.post('/api/orientation/preferences', 
//         {
//           personnalite: newPersonnalite,
//           soft_skills: softSkills
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           }
//         }
//       );
      
//       if (response.data.success) {
//         setPersonnalite(newPersonnalite);
//         setNewPerso('');
        
//         // Mettre à jour les résultats avec les nouvelles préférences
//         if (response.data.data) {
//           setResultats(prev => ({
//             ...prev,
//             personnalité: newPersonnalite,
//             ...response.data.data
//           }));
//         }
//       }
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde des préférences:', error);
//       if (axios.isAxiosError(error) && error.response?.status === 401) {
//         window.location.href = '/login';
//       }
//     }
//   };
//   // Suppression soft skill
//   const removeSkill = (item: string) => setSoftSkills(softSkills.filter(s => s.nom !== item));
  
//   // Ajout soft skill
//   const addSkill = async () => {
//     if (!newSkill.trim() || softSkills.find(s => s.nom === newSkill.trim())) return;
    
//     const token = localStorage.getItem('auth_token');
//     if (!token) {
//       window.location.href = '/login';
//       return;
//     }

//     const newSoftSkills = [...softSkills, { 
//       nom: newSkill.trim(), 
//       score: 0, 
//       description: '' 
//     }];
    
//     try {
//       const response = await axios.post('/api/orientation/preferences', 
//         {
//           personnalite: personnalite,
//           soft_skills: newSoftSkills
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           }
//         }
//       );
      
//       if (response.data.success) {
//         setSoftSkills(newSoftSkills);
//         setNewSkill('');
        
//         // Mettre à jour les résultats avec les nouvelles préférences
//         if (response.data.data) {
//           setResultats(prev => ({
//             ...prev,
//             soft_skills: newSoftSkills,
//             ...response.data.data
//           }));
//         }
//       }
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde des compétences:', error);
//       if (axios.isAxiosError(error) && error.response?.status === 401) {
//         window.location.href = '/login';
//       }
//     }
//   };

//   if (loading) return <div>Chargement...</div>;
//   if (error) return <div className="text-center text-red-600 font-bold mt-10">{error}</div>;
//   if (!resultats) return <div>Résultats en cours d'analyse, veuillez patienter...</div>;

//   // Couleurs pour les 3 profils principaux
//   const mainColors = ['#10b981', '#f59e42', '#eab308'];
//   // Mapping profils (compatibilité structure LLM)
//   let profilsArray: Profil[] = [];
//   if (resultats.profils) {
//     if (Array.isArray(resultats.profils)) {
//       profilsArray = resultats.profils;
//     } else if (typeof resultats.profils === 'object') {
//       profilsArray = Object.entries(resultats.profils).map(([nom, score]) => ({ nom, score: Number(score), description: '' }));
//     }
//   }
//   // Trier et prendre les 3 premiers profils
//   const topProfils = profilsArray.sort((a, b) => b.score - a.score).slice(0, 3);
//   // Pour afficher/masquer les inputs d'ajout
//   const [showPersoInput, setShowPersoInput] = useState(false);
//   const [showSkillInput, setShowSkillInput] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-[#8aabb2] py-10">
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-8 text-[#2a7686]">Mes Résultats</h1>
//         {/* Profils principaux */}
//         <div className="flex gap-6 justify-center mb-6">
//           {topProfils.map((profil, i) => (
//             <div key={profil.nom} className="relative bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center min-w-[220px] max-w-[260px] overflow-hidden" style={{minHeight:'180px'}}>
//               {/* Fond décoratif SVG */}
//               <svg className="absolute left-0 top-0" width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
//                 <path d="M0,0 Q60,0 90,70 Q0,60 0,0" fill={mainColors[i % mainColors.length]+"22"} />
//               </svg>
//               <div className="relative z-10 flex flex-col items-center w-full">
//                 <div className="text-lg font-semibold text-[#2a7686] mb-2 mt-2">VOUS ÊTES</div>
//                 <div className="text-2xl font-bold mb-1 capitalize">{profil.nom}</div>
//                 <div className="w-20 h-20 mb-2"><CircleProgress percent={profil.score} color={mainColors[i % mainColors.length]} /></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-[#ede9fe] text-[#5f3dc4] rounded-lg p-3 mb-6 text-center font-medium">
//           REMARQUE ! Lorsque vous ajoutez ou supprimez un élément de <span className="font-bold underline">Personnalité</span> ou <span className="font-bold underline">Soft Skills</span>, les recommandations sont mises à jour directement !
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           {/* Personnalité */}
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="font-semibold text-lg">Personnalité</div>
//               <button className="bg-[#2a7686] text-white px-3 py-1 rounded" onClick={() => setShowPersoInput(v => !v)}>Ajouter d'autres</button>
//             </div>
//             {showPersoInput && (
//               <div className="flex gap-2 mb-2">
//                 <input value={newPerso} onChange={e => setNewPerso(e.target.value)} className="border rounded px-2 py-1 text-sm flex-1" placeholder="Ajouter..." />
//                 <button onClick={() => { addPerso(); setShowPersoInput(false); }} className="bg-green-500 text-white px-3 py-1 rounded text-sm">OK</button>
//               </div>
//             )}
//             <div className="bg-white rounded-lg shadow p-4">
//               {personnalite.map((item, i) => (
//                 <div key={i} className="flex justify-between items-center border-b last:border-b-0 py-2">
//                   <span>{item}</span>
//                   <button className="text-red-500 hover:text-red-700" onClick={() => removePerso(item)}>🗑️</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Soft Skills */}
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="font-semibold text-lg">Soft Skills</div>
//               <button className="bg-[#2a7686] text-white px-3 py-1 rounded" onClick={() => setShowSkillInput(v => !v)}>Ajouter d'autres</button>
//             </div>
//             {showSkillInput && (
//               <div className="flex gap-2 mb-2">
//                 <input value={newSkill} onChange={e => setNewSkill(e.target.value)} className="border rounded px-2 py-1 text-sm flex-1" placeholder="Ajouter..." />
//                 <button onClick={() => { addSkill(); setShowSkillInput(false); }} className="bg-green-500 text-white px-3 py-1 rounded text-sm">OK</button>
//               </div>
//             )}
//             <div className="bg-white rounded-lg shadow p-4">
//               {softSkills.map((item, i) => (
//                 <div key={i} className="flex justify-between items-center border-b last:border-b-0 py-2">
//                   <span>{typeof item === 'object' ? item.nom : item}</span>
//                   <button className="text-red-500 hover:text-red-700" onClick={() => removeSkill(typeof item === 'object' ? item.nom : item)}>🗑️</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 