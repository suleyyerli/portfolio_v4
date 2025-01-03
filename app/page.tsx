import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";
import { Code } from "lucide-react";
import { GithubIcon } from "@/icons/GithubIcon";
import { DiscordIcon } from "@/icons/DiscordIcon";
import { Download } from "lucide-react";
import { AppleIcon } from "@/icons/AppleIcon";
import { DockerIcon } from "@/icons/DockerIcon";
import { BraveIcon } from "@/icons/BraveIcon";
import { SpotifyIcon } from "@/icons/SpotifyIcon";
import { Badge } from "@/components/ui/badge";
import { VscodeIcon } from "@/icons/VscodeIcon";

export default function Test() {
  return (
    <div className="mx-auto relative">
      {/* Carte de bienvenue */}
      <Card className="rounded-lg text-center shadow-none border-none mb-6 style-card">
        Hello, je suis developpeur fullstack à Strasbourg!
      </Card>

      {/* Layout en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Profile */}
        <Card className=" hover:-translate-y-1 transition-all md:col-span-2 style-card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-mplus-rounded text-3xl font-bold">
                Yerli Süleyman
              </h1>
              <p>Developpeur Junior ( Fullstack / ERP / )</p>
            </div>
            <Avatar className="w-24 h-24">
              <AvatarImage src="/autre/avatar2.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Card>

        {/* Section Description */}
        <Card className=" hover:-translate-y-1 transition-all md:col-span-2 style-card">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2  border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
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
                <ArrowRight className="w-4 h-4 inline animate-spin" />
              </Link>
            </Button>
          </div>
        </Card>

        {/* Section Bio */}
        <Card className=" hover:-translate-y-1 transition-all style-card">
          <h2 className="text-lg font-bold mb-2  border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
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
        <Card className=" hover:-translate-y-1 transition-all style-card">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2  border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
            J&apos; <Heart className="w-4 h-4 inline" />
          </h2>
          <p>
            Sport, <span className="brillance">Voyage</span>, Gaming,{" "}
            <span className="brillance">Programmation</span>, Ski
          </p>
        </Card>

        {/* Section Mes logiciels de choix */}
        <Card className=" hover:-translate-y-1 transition-all md:col-span-2 style-card">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2  border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
            Mes logiciels de choix
          </h2>
          <div className="flex justify-center">
            <div className="flex gap-2 p-4 ">
              <Badge variant="outline" className="style-badge flex">
                <SpotifyIcon size={40} />
              </Badge>

              <Badge variant="outline" className="style-badge flex">
                <AppleIcon size={40} />
              </Badge>

              <Badge variant="outline" className="style-badge flex">
                <BraveIcon size={40} />
              </Badge>

              <Badge variant="outline" className="style-badge flex">
                <DockerIcon size={40} />
              </Badge>

              <Badge variant="outline" className="style-badge flex">
                <DiscordIcon size={40} />
              </Badge>
              <Badge variant="outline" className="style-badge flex">
                <VscodeIcon size={40} />
              </Badge>
              {/* Ajoutez d'autres icônes SVG ici */}
            </div>
          </div>
        </Card>

        {/* Section Web */}
        <Card className=" hover:-translate-y-1 transition-all style-card">
          <h2 className="text-lg font-bold mb-2 border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
            Web <Code className="w-4 h-4 inline" />
          </h2>
          <ul>
            <li>
              <Link href="https://github.com/suleyyerli">
                <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                  <span className="font-mplus-rounded font-bold">
                    <GithubIcon className="w-4 h-4 inline  dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark" />
                  </span>{" "}
                  <span className="brillance">Mon github</span>
                  <ArrowRight className="w-4 h-4 inline animate-ping" />
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
                  <ArrowRight className="w-4 h-4 inline animate-ping" />
                </Button>
              </Link>
            </li>
          </ul>
        </Card>

        {/* Section CV */}
        <Card className=" hover:-translate-y-1 transition-all style-card">
          <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
            Télécharger mon CV
          </h2>

          <div className="flex justify-center mt-2">
            <Button className="bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark shadow-none">
              <a href="/cv.pdf" download="cv.pdf">
                CV
                <Download className="w-4 h-4 inline animate-bounce" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
