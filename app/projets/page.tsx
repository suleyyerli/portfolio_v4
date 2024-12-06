"use client";

import CardProject from "@/components/CardProject";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Projet : UPvote",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    image: "/projetphoto/projetupvote.png",
  },

  {
    id: 2,
    title: "Projet : Mobile",
    description: "Application React-Native, Expo, SQLite.",
    image: "/projetphoto/projetmobile.png",
  },

  {
    id: 3,
    title: "Projet : Devise",
    description:
      "Pour mission en entreprise de retourner le taux de devise en temps réel.",
    image: "/projetphoto/projetdevise.png",
  },

  {
    id: 4,
    title: "Projet : ERP DIAPASON",
    description: "Création de requête dans l'ERP Diapason.",
    image: "/projetphoto/DiapProjet.png",
  },

  {
    id: 5,
    title: "Projet : ERP DIAPASON",
    description: "Création de requête dans l'ERP Diapason.",
    image: "/projetphoto/DiapProjet.png",
  },
];

export default function Projets() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/content/projet${id}`);
  };

  return (
    <div>
      <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 ">
        Projets
      </h2>
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
