"use client";

import CardProject from "@/components/CardProject";

const projects = [
  {
    id: 1,
    title: "Projet : UPvote",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    image: "/projetphoto/projet2.png",
  },

  {
    id: 2,
    title: "Projet : UPvote",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    image: "/projetphoto/projet2.png",
  },

  {
    id: 3,
    title: "Projet : UPvote",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    image: "/projetphoto/projet2.png",
  },
];

export default function Projets() {
  const handleCardClick = (id: number) => {
    router.push(`/projets/${id}`);
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
