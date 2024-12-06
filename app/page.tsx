import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";
import { Code } from "lucide-react";
import { GithubIcon } from "@/icons/GithubIcon";
import { DiscordIcon } from "@/icons/DiscordIcon";

export default function Test() {
  return (
    <div className="mx-auto relative p-6">
      {/* Carte de bienvenue */}
      <Card className="p-3 rounded-lg text-center shadow-none glass-effect border-none mb-6">
        Hello, je suis developpeur fullstack à Strasbourg!
      </Card>

      {/* Layout en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Profile */}
        <Card className="p-6 hover:-translate-y-1 transition-all md:col-span-2 glass-effect border-none">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-mplus-rounded text-3xl font-bold">
                Yerli Süleyman
              </h1>
              <p>Digital Craftsman ( Artist / Developer / Designer )</p>
            </div>
            <Avatar className="w-24 h-24">
              <AvatarImage src="/autre/avatar2.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Card>

        {/* Section Description */}
        <Card className="p-6 hover:-translate-y-1 transition-all md:col-span-2 glass-effect border-none">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30">
            Description
          </h2>
          <p>
            Salut, Je suis, étudiant en alternance en bts sio spécialisé en{" "}
            <span className="brillance">SLAM</span>, passionné
            d&apos;informatique. Mon parcours m&apos;a permis de combiner
            théorie et expérience professionnelle, avec des projets concrets en
            entreprise, incluant le developpement d&apos;outil pour faciliter le
            travail en usine, maîtrise et développement sur{" "}
            <span className="brillance">ERP</span>
          </p>
          <div className="flex justify-center mt-2">
            <Button className="bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark shadow-none">
              <Link href="/projets">
                Mon portfolio
                <ArrowRight className="w-4 h-4 inline" />
              </Link>
            </Button>
          </div>
        </Card>

        {/* Section Bio */}
        <Card className="p-6 hover:-translate-y-1 transition-all glass-effect border-none">
          <h2 className="text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 font-mplus-rounded">
            Bio
          </h2>
          <ul>
            <li>
              <p>
                <span className="font-mplus-rounded font-bold">2001 :</span> Né
                à Strasbourg
              </p>
            </li>

            <li>
              <p>
                <span className="font-mplus-rounded font-bold">2019 :</span> Bac
                option S
              </p>
            </li>

            <li>
              <p>
                <span className="font-mplus-rounded font-bold">2022 :</span> CAP
                Plâtrier Compagnons du devoirs Nantes
              </p>
            </li>

            <li>
              <p>
                <span className="font-mplus-rounded font-bold">
                  2022-2023 :
                </span>{" "}
                Plâtrier, FLADEN MULLER STRASBOURG
              </p>
            </li>
          </ul>
        </Card>

        {/* Section J'aime */}
        <Card className="p-6 hover:-translate-y-1 transition-all glass-effect border-none">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30">
            J&apos; <Heart className="w-4 h-4 inline" />
          </h2>
          <p>
            Sport, <span className="brillance">Voyage</span>, Gaming,{" "}
            <span className="brillance">Programmation</span>, Ski
          </p>
        </Card>

        {/* Section Web */}
        <Card className="p-6 hover:-translate-y-1 transition-all glass-effect border-none">
          <h2 className="text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 font-mplus-rounded">
            Web <Code className="w-4 h-4 inline" />
          </h2>
          <ul>
            <li>
              <Link href="https://github.com/suleyyerli">
                <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                  <span className="font-mplus-rounded font-bold">
                    <GithubIcon className="w-4 h-4 inline bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark" />
                  </span>{" "}
                  <span className="brillance">Mon github</span>
                  <ArrowRight className="w-4 h-4 inline" />
                </Button>
              </Link>
            </li>

            <li>
              <Link href="https://discord.gg/suleyyerli">
                <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                  <span className="font-mplus-rounded font-bold">
                    <DiscordIcon className="w-4 h-4 inline bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark" />
                  </span>{" "}
                  <span className="brillance">Mon discord</span>
                  <ArrowRight className="w-4 h-4 inline" />
                </Button>
              </Link>
            </li>
          </ul>
        </Card>

        {/* Section CV */}
        <Card className="p-6 hover:-translate-y-1 transition-all glass-effect border-none">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30">
            Télécharger mon CV
          </h2>

          <div className="flex justify-center mt-2">
            <Button className="bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark shadow-none">
              <a href="/cv.pdf" download="cv.pdf">
                CV
                <ArrowRight className="w-4 h-4 inline" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
