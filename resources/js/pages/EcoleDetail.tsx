import React from 'react';
import { usePage } from '@inertiajs/react';

const ecoles = [
  {
    slug: "universite-mundiapolis",
    nom: "Université MUNDIAPOLIS",
    descriptionLongue: `L'Université Mundiapolis de Casablanca, établissement d'enseignement supérieur africain, ouvert au monde entier, forme les talents de demain et renforce les compétences managériales et scientifiques des futurs moteurs de changement. Chaque jour, nous nous engageons à façonner l'avenir à travers l'innovation et la recherche développement, au cœur de notre mission. Nous nous efforçons de fournir une formation de qualité, de soutenir nos étudiants dans la réalisation de leurs projets professionnels, de faciliter leur intégration dans la vie active et de favoriser leur progression professionnelle.

En effet, l'accompagnement des étudiants est une priorité, les encourageant à s'exprimer, à se développer et à s'épanouir dans un environnement respectueux des valeurs universelles telles que la tolérance, l'éthique, la protection de l'environnement et la responsabilité sociale. Plaçant l'apprenant au centre du processus éducatif, nous visons à développer à la fois leurs compétences académiques et leur développement personnel.

Ainsi, pour garantir une formation de qualité, nous nous appuyons sur un corps professoral compétent, l'expertise reconnue des professionnels intervenant dans la formation et le professionnalisme de notre équipe pédagogique de soutien. Nous attachons une importance capitale aux expériences pratiques telles que les visites de terrain, les stages et la formation en alternance.

En outre, intégrant les nouvelles technologies dans l'enseignement, nous préparons nos étudiants à une carrière professionnelle durable, en les dotant des compétences nécessaires pour réussir dans un monde en constante évolution. Forts de plus de 25 ans d'expérience, nous pouvons nous targuer d'avoir vu plus de 5000 de nos diplômés intégrer avec succès le marché de l'emploi. Cette réussite témoigne de la valeur et de la pertinence des diplômes délivrés par l'université, ainsi que de la compétence et de l'expertise de nos étudiants.

Découvrez les dates de concours de l'Université Mundiapolis - Casablanca.`
  },
  {
    slug: "um6p-universite-mohammed-vi-polytechnique",
    nom: "UM6P – Université Mohammed VI Polytechnique",
    descriptionLongue: `L'Université Mohammed VI Polytechnique (UM6P) se distingue comme une institution de renommée internationale, axée sur la recherche appliquée et l'innovation, avec un fort engagement envers le développement de l'Afrique. Située à Benguerir, à proximité de Marrakech, au cœur de la Ville Verte Mohammed VI, l'UM6P aspire à rayonner à l'échelle nationale, continentale et internationale.

L'UM6P se positionne non seulement comme une université académique, mais également comme une plateforme d'expérimentation et un vivier d'opportunités. Les étudiants la qualifient souvent de « école de la vie », soulignant ainsi son approche immersive et pratique de l'éducation.

L'essence de l'UM6P réside dans sa mission de contribuer activement à la recherche et à l'innovation. Elle vise à résoudre des défis concrets grâce à des projets de recherche appliquée, en collaboration avec des partenaires industriels, des institutions publiques et d'autres universités renommées à travers le monde. Cette approche permet non seulement de générer de nouvelles connaissances mais aussi d'apporter des solutions innovantes aux problèmes sociétaux, économiques et technologiques actuels.

En tant qu'institution orientée vers l'Afrique, l'UM6P s'engage à former une nouvelle génération de leaders capables de relever les défis continentaux et mondiaux. Ses programmes éducatifs sont conçus pour intégrer les dernières avancées technologiques et les meilleures pratiques internationales dans chaque domaine d'étude, garantissant ainsi que ses diplômés soient parfaitement préparés à contribuer positivement à leurs communautés et à leurs pays.

En outre, l'Université Mohammed VI Polytechnique incarne une vision ambitieuse pour l'éducation supérieure, où l'excellence académique, la recherche appliquée, l'innovation et l'engagement envers le développement de l'Afrique se conjuguent harmonieusement. En explorant les dates des concours et en découvrant plus sur l'UM6P, les étudiants et chercheurs peuvent s'attendre à bénéficier d'une formation de classe mondiale et à jouer un rôle significatif dans la transformation positive de leurs sociétés.`
  },
  {
    slug: "esca-ecole-de-management",
    nom: "ESCA Ecole de Management",
    descriptionLongue: `Fondée en 1992, ESCA Ecole de Management se distingue comme la première Business School Privée au Maroc et en Afrique Francophone à être accréditée par l'AACSB, une reconnaissance prestigieuse qui atteste de son excellence académique. Avec plus de 4000 diplômés à son actif, l'ESCA forme chaque année 1100 étudiants, cadres et dirigeants au sein de ses divers programmes d'études supérieures et à travers son département de formation continue, qui inclut des formations initiales et professionnelles.

L'ambition de l'ESCA repose sur la formation d'une nouvelle génération de cadres à haut potentiel et d'entrepreneurs socialement responsables. Grâce à des programmes en entrepreneuriat et en développement international, l'école prépare ses étudiants à contribuer efficacement à la performance et à l'internationalisation des entreprises de la région. Une preuve de cette réussite réside dans le fait que 81% de ses lauréats occupent des postes de management tant au niveau national qu'international, et 62% d'entre eux possèdent une expérience professionnelle à l'étranger.

En plus, ESCA École de Management a fait de l'internationalisation un axe stratégique de son développement. Elle a tissé un réseau de 95 partenaires internationaux prestigieux à travers le monde, permettant une richesse d'échanges académiques et professionnels. Chaque année, l'école accueille plus de 250 étudiants et participants internationaux pour des semestres d'études et des Study Trips, créant un environnement multiculturel et dynamique.

En outre, ESCA École de Management s'impose comme une institution phare dans le domaine de l'enseignement du management au Maroc et en Afrique Francophone. En choisissant l'ESCA, les étudiants bénéficient non seulement d'une éducation de qualité reconnue internationalement, mais aussi d'une opportunité unique de développer des compétences globales et d'accéder à un réseau professionnel étendu.

Découvrez les dates de concours de ESCA Ecole de Management .`
  },
  {
    slug: "eac-ecole-architecture-casablanca",
    nom: "EAC – Ecole d'Architecture et de Paysage de Casablanca",
    descriptionLongue: `L'École d'Architecture et de Paysage de Casablanca (EAC) occupe une position centrale dans une métropole africaine abritant 4 millions d'habitants. Elle se distingue par son engagement en faveur du développement durable des villes, de la création architecturale responsable, ainsi que de l'urbanisme et du paysagisme orientés vers l'environnement. Fondée sur des normes internationales d'enseignement, l'EAC offre une formation complète visant à doter les étudiants des compétences nécessaires pour exceller dans leurs métiers.

L'EAC joue un rôle essentiel dans la formation d'une nouvelle génération d'architectes et de paysagistes capables de répondre aux défis contemporains de l'urbanisation et de la préservation environnementale. En intégrant les principes du développement durable et de la responsabilité sociétale au cœur de ses cursus, l'école prépare ses étudiants à concevoir des solutions innovantes et durables pour les espaces urbains et naturels.

L'EAC s'engage également à promouvoir l'excellence académique à travers un corps professoral qualifié et expérimenté, ainsi qu'à encourager l'innovation et la recherche dans le domaine de l'architecture et du paysage. En collaborant avec des professionnels du secteur et en organisant des projets multidisciplinaires, l'école stimule le développement intellectuel et professionnel de ses étudiants.

En outre, l'École d'Architecture et de Paysage de Casablanca (EAC) se positionne comme un acteur clé dans la formation d'une main-d'œuvre spécialisée et consciente des enjeux environnementaux et sociétaux. Elle offre un environnement d'apprentissage stimulant où les étudiants sont préparés à devenir des architectes et des paysagistes visionnaires, prêts à contribuer positivement à la transformation des espaces urbains et naturels au Maroc et au-delà.

Découvrez toutes les dates des concours de EAC - Ecole d'Architecture et de Paysage de Casablanca`
  },
  {
    slug: "business-school-mundiapolis",
    nom: "Business School (Mundiapolis)",
    descriptionLongue: `La Business School de l'Université Mundiapolis se distingue par de nombreux atouts, faisant d'elle une institution très prisée par les étudiants au Maroc et dans les pays sub-sahariens. Cet établissement s'engage fermement envers l'excellence académique, en s'appuyant sur l'expérience d'un corps professoral choisi pour sa qualité académique , au Maroc comme à l'étranger. Les professeurs apportent une expertise variée et enrichissante, garantissant un enseignement de haut niveau.

En effet, la Business School assure un suivi et un accompagnement personnalisés pour ses étudiants, leur permettant d'acquérir les connaissances et les compétences recherchées sur le marché du travail. Les étudiants bénéficient d'un encadrement attentif qui les guide tout au long de leur parcours académique et professionnel.

Ainsi, comme les autres établissements de l'Université Mundiapolis, la Business School offre des diplômes reconnus par l'État, répondant aux attentes des étudiants en quête d'une formation solide et orientée vers l'emploi. Aujourd'hui, la Business School propose également quatre parcours de licences et cinq diplômes de masters, couvrant divers domaines du monde de l'entreprise. Ces programmes sont conçus pour répondre aux besoins actuels et futurs des entreprises, en formant des professionnels compétents.

De plus, la plupart de ces formations offrent des possibilités de doubles diplômes et d'échanges avec des business schools étrangères de premier plan. L'ouverture à l'international constitue une orientation clé de la Business School, permettant aux étudiants de bénéficier d'une exposition globale et d'enrichir leur expérience académique et professionnelle. Ces opportunités d'échanges et de doubles diplômes renforcent leur compétitivité sur le marché de l'emploi.

Découvrez toutes les dates des concours de la Business School de l'Université Mundiapolis dès maintenant et saisissez l'opportunité de rejoindre une institution qui vous prépare à une carrière internationale réussie. En intégrant cette école, vous bénéficierez d'une formation de qualité, d'une ouverture internationale et d'un soutien constant pour atteindre vos objectifs professionnels.`
  },
  {
    slug: "institut-sciences-politiques-mundiapolis",
    nom: "Institut des Sciences Politiques, Juridiques et Sociales (Mundiapolis)",
    descriptionLongue: `Institut des Sciences Politiques, Juridiques et Sociales de l'Université Mundiapolis offre deux parcours distincts mais complémentaires : le parcours Droit et le parcours Sciences Politiques.

Dans le cadre du parcours Droit, les étudiants suivent un programme exigeant qui allie les fondements du droit avec les compétences nécessaires pour évoluer dans le monde professionnel, notamment dans le domaine des entreprises. La licence en droit des entreprises (bac+3) met l'accent sur les enseignements fondamentaux du droit tout en intégrant des aspects de gestion d'entreprise. Les étudiants acquièrent ainsi une compréhension approfondie des rouages juridiques tout en développant des compétences pratiques en gestion, indispensables pour naviguer dans le monde des affaires. De plus, dès la première année, des stages obligatoires viennent enrichir le cursus, offrant aux étudiants une première immersion dans le monde professionnel.

Quant au parcours Sciences Politiques, il vise à former des professionnels aptes à comprendre et à agir dans le domaine politique et gouvernemental. La licence en Sciences Politiques et Gouvernance (bac+3) propose un programme complet qui aborde les théories politiques, les institutions gouvernementales et les enjeux contemporains de la gouvernance. Les étudiants développent ainsi une analyse fine des processus politiques tout en se familiarisant avec les pratiques de gouvernance. Comme pour le parcours Droit, des stages obligatoires sont intégrés dès la première année, permettant aux étudiants de mettre en pratique leurs connaissances théoriques et de découvrir les réalités du terrain.

L'Institut des Sciences Politiques, Juridiques et Sociales de l'Université Mundiapolis offre des parcours riches et diversifiés, préparant les étudiants à relever les défis professionnels dans les domaines du droit des entreprises et des sciences politiques, tout en mettant l'accent sur l'acquisition de compétences pratiques grâce à des stages obligatoires dès la première année.

<strong>Découvrez les formations proposés par l'Institut des Sciences Politiques, Juridiques et Sociales - Mundiapolis</strong>`
  },
  {
    slug: "ensam-ecole-nationale-superieure-arts-metiers-meknes",
    nom: "ENSAM – École Nationale Supérieure D'arts Et Métiers Meknès",
    descriptionLongue: `L'École Nationale Supérieure des Arts et Métiers de Meknès (ENSAM Meknès) a ouvert ses portes en septembre 1997 dans le cadre de l'initiative visant à renforcer l'interaction entre l'université marocaine et son environnement socioéconomique. Sa création représente un élément stratégique pour stimuler le secteur industriel et économique de la région centre-sud du Maroc.

L'ENSAM Meknès adopte le modèle des écoles Arts et Métiers, répondant ainsi à la nécessité de diversifier les méthodes et outils de renouvellement du secteur industriel. C'est aussi une réponse à la demande croissante de professionnels hautement qualifiés, capables de combiner savoir, savoir-faire et savoir-être. Structurés en deux années de cycle préparatoire intégré, suivies de trois années de cycle ingénieur avec spécialisations, les programmes offerts par l'ENSAM Meknès préparent les élèves ingénieurs à une carrière diversifiée et enrichissante dans le secteur industriel.

Les formations couvrent une large gamme de spécialités, notamment le génie mécanique, le génie industriel et productique, le génie électromécanique, le génie civil, les énergies renouvelables, les fonderies, le dessin industriel, entre autres. Chaque spécialité est conçue pour fournir aux étudiants une formation complète et équilibrée, intégrant des compétences techniques avancées ainsi que des aptitudes en Soft Skills telles que la gestion de projet, la communication et le travail d'équipe.

En plus de l'enseignement académique rigoureux, l'ENSAM Meknès accorde une grande importance à la pratique et à l'application des connaissances théoriques à travers des projets industriels, des stages en entreprise et des collaborations avec le milieu professionnel. Cela permet aux étudiants de développer des compétences concrètes et opérationnelles qui sont directement applicables dans le monde du travail dès leur sortie de l'école.

Découvrez toutes les dates des concours de ENSAM - L'École Nationale Supérieure des Arts et Métiers Meknès`
  },
  {
    slug: "sse-al-akhawayn-ecole-sciences-ingenierie-ifrane",
    nom: "SSE Al Akhawayn – Ecole de Sciences et d'Ingénierie Ifrane",
    descriptionLongue: `L'École de Sciences et d'Ingénierie de l'Université Al Akhawayn à Ifrane, connue sous le nom de School of Science and Engineering (SSE Al Akhawayn), forme des dirigeants professionnels et des ingénieurs pluridisciplinaires. Elle vise à développer des compétences techniques, une responsabilité sociale, une éthique élevée, un esprit d'entreprise, ainsi que des qualités de communication et de leadership chez ses étudiants.

En effet, SSE Al Akhawayn offre un enseignement de renommée mondiale grâce à des classes à effectifs réduits, favorisant l'apprentissage et le travail en équipe. Son corps professoral, doté d'une expérience internationale en matière d'enseignement et de recherche, assure une formation de haute qualité. Les étudiants ont l'occasion de réaliser des projets pratiques pour appliquer les connaissances et compétences acquises. En outre, cette école offre des opportunités d'études et de stages à l'étranger, permettant aux étudiants d'acquérir une compréhension culturelle élargie et une perspective internationale.

L'école se distingue par son engagement envers l'excellence académique et pratique. Elle prépare les étudiants à relever les défis techniques et à innover dans leurs domaines respectifs. Les programmes de formation couvrent un large éventail de disciplines, répondant aux besoins actuels du marché et anticipant les évolutions futures.

Cette école se fixe ainsi pour objectif de devenir la première école d'ingénieurs de langue anglaise au Maroc. Elle aspire à être reconnue internationalement pour son innovation, ses partenariats avec l'industrie et sa collaboration internationale. En tant que communauté académique unique, SSE Al Akhawayn crée un environnement propice à la recherche et à l'innovation.

Découvrez toutes les dates des concours de SSE Al Akhawayn - École de Sciences et d'Ingénierie Ifrane et préparez-vous à une carrière prometteuse dans le domaine des sciences et de l'ingénierie.`
  },
];

export default function EcoleDetail({ slug }) {
  const ecole = ecoles.find(e => e.slug === slug);
  if (!ecole) return <div className="text-center mt-10 text-red-600">Ecole non trouvée</div>;
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">{ecole.nom}</h1>
      <div className="text-gray-700 text-lg mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{__html: ecole.descriptionLongue}} />
    </div>
  );
} 