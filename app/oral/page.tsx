"use client";

import { useState } from "react";
import Espace from "@/components/Espace";
import Link from "next/link";
import Image from "next/image";

export default function Oral() {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Bienvenue",
      content: (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Bonjour</h1>
          <Image
            src="/autre/avatar.png"
            alt="Bienvenue"
            width={200}
            height={100}
            className="mx-auto max-w-xs h-auto"
            priority
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Présentation personnelle",
      content: (
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            Bonjour, je m&apos;appelle Süleyman, alternant développeur en BTS
            SIO option SLAM. J&apos;habite un petit village à 15 minutes de
            Strasbourg : Weyersheim.
          </p>
          <p className="mb-4">
            Mon parcours est atypique : j&apos;ai obtenu un bac S en 2019, et
            n&apos;étant pas encore sûr de ma voie, je suis parti deux ans à
            Nantes où j&apos;ai réalisé un CAP Plâtrier chez les Compagnons du
            Devoir.
          </p>
          <p className="mb-4">
            Ensuite, je me suis réorienté vers l&apos;informatique, une passion
            de toujours. J&apos;ai également été influencé par mes deux oncles,
            l&apos;un dans le réseau, l&apos;autre développeur.
          </p>
          <p className="mb-4">
            Attiré par la création et le développement, j&apos;ai choisi
            l&apos;option SLAM.
          </p>
          <p className="mb-4">
            Aujourd&apos;hui, je suis en alternance chez CLESTRA, où je
            travaille sur divers projets de développement.
          </p>
          <p className="mb-4">
            Pour la suite, je souhaite poursuivre vers une licence Concepteur
            Développeur d&apos;Applications (CDA), toujours en alternance chez
            CLESTRA.
          </p>
          <p className="italic mt-8">
            Je vais maintenant vous présenter mes réalisations professionnelles.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Réalisations professionnelles – 1ère année",
      content: (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Gestion de parc informatique
            </h3>
            <p>
              Cette partie est une présentation des différentes tâches que
              j&apos;ai effectuées lors de mon alternance en première années.
              Mais que j&apos;effectue toujours aujourd&apos;hui.
            </p>
            <Link
              href="/projet_pdf/gestion_parc.pdf"
              target="_blank"
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
              Voir le projet PDF
            </Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Gestion de collection Pokémon
            </h3>
            <p>Présentation et démonstration de mon application mobile</p>
          </div>
          <p className="italic mt-8">
            Passons maintenant à mes réalisations de deuxième année.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Réalisations professionnelles – 2ème année",
      content: (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Projet de pointage CLESTRA. Le projet qui ma fait comprendre notre
              métier.
            </h3>
            <p>
              Ce projet est pour moi celui qui reprend tous ce que j&apos;ai
              appris durant ces deux années d&apos;alternance et de formation.
            </p>
            <Link
              href="/projet_pdf/projet_pointage.pdf"
              target="_blank"
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
              Voir le projet PDF
            </Link>
          </div>
          <p className="italic mt-8">
            Je vais maintenant vous présenter ma veille technologique.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Veille technologique",
      content: (
        <div className="max-w-3xl mx-auto">
          <Link
            href="/veilletechno"
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
            Accéder à ma veille technologique
          </Link>
          <p className="italic mt-8">
            Je terminerai par mon tableau de synthèse.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Tableau de synthèse",
      content: (
        <div className="max-w-3xl mx-auto">
          <a
            href="/projet_pdf/tab_synthese_sy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center mb-4 font-semibold"
          >
            📄 Ouvrir le PDF du tableau de synthèse
          </a>
          <div className="w-full h-[500px] bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
            <iframe
              src="/projet_pdf/tab_synthese_sy.pdf"
              title="Tableau de synthèse"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Merci pour votre attention",
      content: (
        <div className="text-center">
          <Image
            src="/autre/avatar1.png"
            alt="Fin"
            width={200}
            height={100}
            className="mx-auto max-w-xs h-auto"
            priority
          />
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentSection < sections.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Espace />

      {/* Plan de la présentation */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-black">
          Plan de la présentation
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-sm">
            <span className="font-semibold">Présentation personnelle</span>
            <span className="text-gray-600 ml-2">
              - Mon parcours et mes motivations
            </span>
          </li>
          <li className="text-sm">
            <span className="font-semibold">
              Réalisations professionnelles – 1ère année
            </span>
            <span className="text-gray-600 ml-2">
              - Gestion de parc informatique et application mobile
            </span>
          </li>
          <li className="text-sm">
            <span className="font-semibold">
              Réalisations professionnelles – 2ème année
            </span>
            <span className="text-gray-600 ml-2">
              - Projet de pointage CLESTRA
            </span>
          </li>
          <li className="text-sm">
            <span className="font-semibold">Veille technologique</span>
            <span className="text-gray-600 ml-2">- Ma démarche de veille</span>
          </li>
          <li className="text-sm">
            <span className="font-semibold">Tableau de synthèse</span>
            <span className="text-gray-600 ml-2">- Bilan des compétences</span>
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">
          {sections[currentSection - 1].title}
        </h1>
        {sections[currentSection - 1].content}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 1}
          className={`px-4 py-2 rounded ${
            currentSection === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Précédent
        </button>
        <span className="text-gray-600">
          {currentSection} / {sections.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentSection === sections.length}
          className={`px-4 py-2 rounded ${
            currentSection === sections.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
