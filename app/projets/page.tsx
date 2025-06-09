"use client";

import CardProject from "@/components/CardProject";
import { useRouter } from "next/navigation";
import Espace from "@/components/Espace";

const projects = [
  {
    id: 1,
    title: "NewVote",
    description:
      "Application full-stack, Serveur backend en NodeJS, Express frontend en React, TailwindCSS,DaisyUI, Base de données serveur MySQL.",
    image: "/projetphoto/NewVote.png",
    githubUrl: "https://github.com/suleyyerli/NewVote",
  },

  {
    id: 2,
    title: "Mobile",
    description:
      "Application React-Native, Expo, SQLite. Permettant de gérer sa collection Pokemon.",
    image: "/projetphoto/ProjetMobile.png",
    githubUrl: "https://github.com/suleyyerli/pokeligame",
  },

  {
    id: 3,
    title: "Devise",
    description:
      "Pour mission en entreprise de retourner le taux de change en temps réel.",
    image: "/projetphoto/projetdevise.png",
    githubUrl: "https://github.com/suleyyerli/app_devise",
  },

  {
    id: 4,
    title: "ERP DIAPASON",
    description: "Création de requête dans l'ERP Diapason.",
    image: "/projetphoto/DiapProjet.png",
  },

  {
    id: 5,
    title: "Réalisation de portfolio",
    description:
      "Création de portfolio durant ma formation en tant que développeur fullstack.",
    image: "/projetphoto/exportfolio.png",
    githubUrl: "https://github.com/suleyyerli/portfolio_nextjs",
  },

  {
    id: 6,
    title: "ERP Projet entreprise",
    description:
      "Création du module de pointage pour l'entreprise dans l'ERP(Diapason) de A à Z.",
    image: "/projetphoto/schema_pointage.png",
  },
];

const pdfProjects = [
  {
    id: 1,
    title: "Gestion de parc informatique",
    description: "Compétences acquises : 1️⃣ 2️⃣ 3️⃣",
    pdfs: [
      {
        name: "Documentations",
        url: "/projet_pdf/gestion_parc.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "NewVote",
    description: "Compétences acquises : 4️⃣ 3️⃣ 5️⃣",
    pdfs: [
      {
        name: "Documentation du projet",
        url: "/projet_pdf/NewVotecdc.pdf",
      },

      {
        name: "Illustrations",
        url: "/projet_pdf/NewVote_illustrations.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Mobile Pokeligame application de gestion de collection de Pokémon",
    description: "Compétences acquises : 4️⃣ 3️⃣ 5️⃣",
    pdfs: [
      {
        name: "Documentation du projet",
        url: "/projet_pdf/cdcpokeligame.pdf",
      },
      {
        name: "Illustrations",
        url: "/projet_pdf/pokeligame_illustrations.pdf",
      },
    ],
  },
  {
    id: 4,
    title: "Projet complet en entreprise, POINTAGE",
    description: "Compétences acquises : 4️⃣ 2️⃣ 3️⃣ 5️⃣",
    pdfs: [
      {
        name: "Documentation du projet",
        url: "/projet_pdf/projet_pointage.pdf",
      },
    ],
  },
  {
    id: 5,
    title: "Projet en entreprise, Devise",
    description: "Compétences acquises : 4️⃣ 2️⃣ 3️⃣ 5️⃣",
    pdfs: [
      {
        name: "Documentation du projet",
        url: "/projet_pdf/devise.pdf",
      },
    ],
  },
  {
    id: 6,
    title: "Formation en entreprise",
    description: "Compétences acquises : 5️⃣",
    pdfs: [
      {
        name: "Documentation du projet",
        url: "/projet_pdf/tp_diapason.pdf",
      },
    ],
  },

  {
    id: 7,
    title: "TP_GSB",
    description: "Compétences acquises : 4️⃣ 5️⃣",
    pdfs: [
      {
        name: "L1 Environnement",
        url: "/projet_pdf/L1environnements.pdf",
      },
      {
        name: "L1 Développement",
        url: "/projet_pdf/L1developpement.pdf",
      },
      {
        name: "L1 Déploiement",
        url: "/projet_pdf/L1deploiement.pdf",
      },
      {
        name: "L2 Clôturer-fichedefrais",
        url: "/projet_pdf/L2cloturer_fichefrais.pdf",
      },
      {
        name: "L2 Hachage-mdp",
        url: "/projet_pdf/L2hachage_mdp.pdf",
      },
    ],
  },

  {
    id: 8,
    title: "TP_CRUD-NodeJS",
    description: "",
    pdfs: [
      {
        name: "Documentation",
        url: "/projet_pdf/crud_nodejs.pdf",
      },
    ],
  },

  {
    id: 9,
    title: "TP_URBACKUP",
    description: "",
    pdfs: [
      {
        name: "Documentation",
        url: "/projet_pdf/td_urbackupsuley.pdf",
      },
    ],
  },

  {
    id: 10,
    title: "TP_POO 1 (Rust)",
    description: "",
    pdfs: [
      {
        name: "Documentation",
        url: "/projet_pdf/poo_rust.pdf",
      },
    ],
  },

  {
    id: 11,
    title: "TP_POO 2 (JS)",
    description: "",
    pdfs: [
      {
        name: "Documentation",
        url: "/projet_pdf/poo_js.pdf",
      },
    ],
  },

  {
    id: 12,
    title: "Réalisation de portfolio",
    description: "",
    pdfs: [
      {
        name: "Quelques illustrations",
        url: "/projet_pdf/tousportfolio.pdf",
      },
    ],
  },
];

export default function Projets() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/content/projet${id}`);
  };

  return (
    <div>
      <Espace />
      <h2 className="text-lg font-bold mb-2 inline-block">Projets</h2>
      <div className="mt-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            {...project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold mb-4">Documentation en PDF</h2>
        <h3 className="mb-3">Compétences:</h3>
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <p>1️⃣ Gérer le patrimoine informatique</p>
          <p>
            2️⃣ Répondre aux incidents et aux demandes d'assistance et
            d'évolution
          </p>
          <p>
            3️⃣ Mettre à disposition des utilisateurs un service informatique
          </p>
          <p>4️⃣ Travailler en mode projet</p>
          <p>5️⃣ Organiser son développement professionnel</p>
        </div>
        <div className="space-y-2">
          {pdfProjects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg">
              <h3 className="text-md font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="space-y-2">
                {project.pdfs.map((pdf, index) => (
                  <a
                    key={index}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {pdf.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
