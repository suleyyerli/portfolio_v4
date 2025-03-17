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
  },

  {
    id: 2,
    title: "Mobile",
    description:
      "Application React-Native, Expo, SQLite. Permettant de gérer sa collection Pokemon.",
    image: "/projetphoto/ProjetMobile.png",
  },

  {
    id: 3,
    title: "Devise",
    description:
      "Pour mission en entreprise de retourner le taux de change en temps réel.",
    image: "/projetphoto/projetdevise.png",
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
      <div className="mt-4 "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            {...project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
}
