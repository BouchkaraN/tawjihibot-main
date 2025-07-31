import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const ecoles = [
  {
    slug: "universite-mundiapolis",
    nom: "Université MUNDIAPOLIS",
    logo: "", // Placeholder
    description: "Une université ancrée en Afrique et ouverte sur le reste du monde, sa mission consiste à former et à renforcer les capacités managériales et scientifiques de l'élite de demain, contribuer à l'avancée de la recherche.",
    statut: "Privé",
    ville: "Casablanca",
    tags: ["Privé", "Casablanca", "Université"],
    descriptionLongue: "Université Mundiapolis : Description longue à compléter..."
  },
  {
    slug: "um6p-universite-mohammed-vi-polytechnique",
    nom: "UM6P – Université Mohammed VI Polytechnique",
    logo: "", // Placeholder
    description: "UM6P - L'Université Mohammed VI Polytechnique est une institution orientée vers la recherche appliquée et l'innovation et tournée vers l'Afrique, qui ambitionne de se placer parmi les universités d'excellence.",
    statut: "Privé",
    ville: "Ben Guerir",
    tags: ["Privé", "Ben Guerir", "Université"],
    descriptionLongue: `L'Université Mohammed VI Polytechnique (UM6P) se distingue comme une institution de renommée internationale, axée sur la recherche appliquée et l'innovation, avec un fort engagement envers le développement de l'Afrique. Située à Benguerir, à proximité de Marrakech, au cœur de la Ville Verte Mohammed VI, l'UM6P aspire à rayonner à l'échelle nationale, continentale et internationale.\n\nL'UM6P se positionne non seulement comme une université académique, mais également comme une plateforme d'expérimentation et un vivier d'opportunités. Les étudiants la qualifient souvent de « école de la vie », soulignant ainsi son approche immersive et pratique de l'éducation.\n\nL'essence de l'UM6P réside dans sa mission de contribuer activement à la recherche et à l'innovation. Elle vise à résoudre des défis concrets grâce à des projets de recherche appliquée, en collaboration avec des partenaires industriels, des institutions publiques et d'autres universités renommées à travers le monde. Cette approche permet non seulement de générer de nouvelles connaissances mais aussi d'apporter des solutions innovantes aux problèmes sociétaux, économiques et technologiques actuels.\n\nEn tant qu'institution orientée vers l'Afrique, l'UM6P s'engage à former une nouvelle génération de leaders capables de relever les défis continentaux et mondiaux. Ses programmes éducatifs sont conçus pour intégrer les dernières avancées technologiques et les meilleures pratiques internationales dans chaque domaine d'étude, garantissant ainsi que ses diplômés soient parfaitement préparés à contribuer positivement à leurs communautés et à leurs pays.\n\nEn outre, l'Université Mohammed VI Polytechnique incarne une vision ambitieuse pour l'éducation supérieure, où l'excellence académique, la recherche appliquée, l'innovation et l'engagement envers le développement de l'Afrique se conjuguent harmonieusement. En explorant les dates des concours et en découvrant plus sur l'UM6P, les étudiants et chercheurs peuvent s'attendre à bénéficier d'une formation de classe mondiale et à jouer un rôle significatif dans la transformation positive de leurs sociétés.`
  },
  {
    slug: "esca-ecole-de-management",
    nom: "ESCA Ecole de Management",
    logo: "", // Placeholder
    description: "Fondée en 1992, ESCA Ecole de Management est la première Business School Privée au Maroc et en Afrique Francophone à être accréditée AACSB. Elle compte plus de 4000 lauréats.",
    statut: "Privé",
    ville: "Casablanca",
    tags: ["Privé", "Casablanca", "Ecole"],
    descriptionLongue: "ESCA Ecole de Management : Description longue à compléter..."
  },
  {
    slug: "eac-ecole-architecture-casablanca",
    nom: "EAC – Ecole d'Architecture et de Paysage de Casablanca",
    logo: "", // Placeholder
    description: "Située au cœur d'une métropole africaine de 4 millions d'habitants, l'Ecole d'Architecture de Casablanca ancre le développement durable des villes, une création architecturale responsable et un urbanisme innovant.",
    statut: "Privé",
    ville: "Casablanca",
    tags: ["Privé", "Casablanca", "Ecole"],
    descriptionLongue: "EAC – Ecole d'Architecture et de Paysage de Casablanca : Description longue à compléter..."
  },
  {
    slug: "business-school-mundiapolis",
    nom: "Business School (Mundiapolis)",
    logo: "", // Placeholder
    description: "La Business School de l'Université Mundiapolis se distingue par plusieurs atouts qui en font aujourd'hui une institution de référence dans le paysage des business schools au Maroc et dans les pays subsahariens.",
    statut: "Privé",
    ville: "Casablanca",
    tags: ["Privé", "Casablanca", "Ecole"],
    descriptionLongue: "Business School (Mundiapolis) : Description longue à compléter..."
  },
  {
    slug: "institut-sciences-politiques-mundiapolis",
    nom: "Institut des Sciences Politiques, Juridiques et Sociales (Mundiapolis)",
    logo: "", // Placeholder
    description: "L'Institut des Sciences Politiques, Juridiques et Sociales de l'Université Mundiapolis propose un parcours Droit (Licence et Master) orienté vers les métiers du droit des entreprises bac+3, et un master droit des affaires en alternance bac+5.",
    statut: "Privé",
    ville: "Casablanca",
    tags: ["Privé", "Casablanca", "Institut"],
    descriptionLongue: "Institut des Sciences Politiques, Juridiques et Sociales (Mundiapolis) : Description longue à compléter..."
  },
];

export default function EcolesUniversites() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-[#8aabb2] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#2a7686] mb-8 text-center">Ecoles et Universités</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ecoles.map((ecole, idx) => (
            <Link key={ecole.slug} href={`/ecoles-universites/${ecole.slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-72 relative group transition-transform hover:scale-[1.03] cursor-pointer">
                {/* Logo centré en haut */}
                <div className="w-full flex justify-center items-center mb-4 min-h-[48px]">
                  {ecole.logo
                    ? <img src={ecole.logo} alt={ecole.nom} className="max-h-12 max-w-24 object-contain" />
                    : <span className="text-lg font-bold text-[#2a7686] opacity-70">{ecole.nom.split(' ')[0]}</span>
                  }
                </div>
                {/* Nom */}
                <div className="font-bold text-base mb-1 text-[#222] text-left w-full truncate">{ecole.nom}</div>
                {/* Description */}
                <div className="text-gray-500 text-xs mb-2 text-left w-full line-clamp-3">{ecole.description}</div>
                {/* Tags en bas à gauche */}
                <div className="absolute left-6 bottom-4 flex gap-2 flex-wrap">
                  {ecole.tags.map((tag, i) => (
                    <span key={i} className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                {/* Flèche à droite */}
                <div className="absolute right-6 bottom-4 flex items-center h-6">
                  <ArrowRight className="text-gray-400 group-hover:text-[#2a7686] transition-colors" size={22} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 