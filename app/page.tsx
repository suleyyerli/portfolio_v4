"use client";

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
import Espace from "@/components/Espace";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-hover");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const event = e as MouseEvent;
        const element = card as HTMLElement;
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }, []);

  return (
    <div className="mx-auto relative">
      <Espace />
      {/* Carte de bienvenue */}

      {/* Layout en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Profile */}
        <Card className="card-hover relative rounded-sm border border-zinc-800 p-3 md:col-span-2 before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Yerli Süleyman</h1>
              <h1>Developpeur Junior ( Fullstack / ERP / )</h1>
            </div>
            <Avatar className="w-24 h-24">
              <AvatarImage src="/autre/avatar2.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Card>

        {/* Section Description */}
        <div className="transition-all md:col-span-2">
          <h2 className="text-lg font-medium mb-2 inline-block">Description</h2>
          <Separator className="bg-zinc-800 my-2" />
          <p className="text-sm">
            Je suis étudiant en alternance en{" "}
            <span className="font-medium text-[#FAFAFA]">BTS SIO</span>{" "}
            spécialisé en{" "}
            <span className="font-medium text-[#FAFAFA]">SLAM</span>, passionné
            d&apos;informatique. Mon parcours m&apos;a permis de combiner
            théorie et expérience professionnelle, avec des projets concrets en
            entreprise, incluant le développement d&apos;outil pour faciliter le
            travail en usine, maîtrise et développement sur{" "}
            <span className="font-medium text-[#FAFAFA]">ERP</span>.
          </p>
          <div className="flex justify-center mt-2">
            <Button>
              <Link href="/projets">
                Mon portfolio
                <ArrowRight className="w-4 h-4 inline animate-spin" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Section Bio */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 transition-all group hover:-translate-y-1 before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-medium mb-2 inline-block">Bio</h2>
          <ul className="text-sm">
            <li>
              <p>
                <span className="font-bold">2001 :</span> Né à Strasbourg
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">2019 :</span> Bac option S
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">2021 :</span> CAP Plâtrier
                Compagnons du devoirs Nantes
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">2021-2022 :</span> Plâtrier, FLADEN
                MULLER STRASBOURG CDI
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">2023-2025 :</span> BTS SIO,
                Strasbourg
              </p>
            </li>
          </ul>
        </Card>

        {/* Section J'aime */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-medium mb-2 inline-block ">
            J&apos; <Heart className="w-4 h-4 inline" />
          </h2>
          <p className="text-sm">
            Sport, <span className="brillance">Voyage</span>, Gaming,{" "}
            <span className="brillance">Programmation</span>, Ski,{" "}
            <span className="brillance">Musique</span>
          </p>
        </Card>

        {/* Section Mes logiciels de choix */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all md:col-span-2 before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-medium mb-2 inline-block">
            Mes logiciels de choix
          </h2>
          <div className="overflow-hidden">
            <div className="flex gap-6">
              <SpotifyIcon size={40} />
              <AppleIcon size={40} />
              <BraveIcon size={40} />
              <DockerIcon size={40} />
              <DiscordIcon size={40} />
              <VscodeIcon size={40} />
              <SpotifyIcon size={40} />
              <AppleIcon size={40} />
              <BraveIcon size={40} />
              <DockerIcon size={40} />
              <DiscordIcon size={40} />
              <VscodeIcon size={40} />
            </div>
          </div>
        </Card>

        {/* Section Compétences */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all md:col-span-2 before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-medium mb-2 inline-block ">
            Compétences
          </h2>
          <div>
            <ul className="flex flex-wrap gap-2 text-sm">
              <li>
                <Badge className="bg-[#fcd35e]">Javascript</Badge>
              </li>
              <li>
                <Badge className="bg-[#0083f0]">React</Badge>
              </li>
              <li>
                <Badge className="bg-[#b2babb]">Next.js</Badge>
              </li>
              <li>
                <Badge className="bg-[#0083f0]">Docker</Badge>
              </li>
              <li>
                <Badge className="bg-[#b2babb]/50">Github</Badge>
              </li>
              <li>
                <Badge className="bg-[#dd4814]">Linux</Badge>
              </li>
              <li>
                <Badge className="bg-[#58d68d]">SQL</Badge>
              </li>
            </ul>
          </div>
        </Card>

        {/* Section Web */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-medium mb-2 inline-block ">
            Web <Code className="w-4 h-4 inline" />
          </h2>
          <ul>
            <li>
              <Link href="https://github.com/suleyyerli">
                <Button>
                  <span className=" font-medium">
                    <GithubIcon className="w-4 h-4 inline" />
                  </span>{" "}
                  <p>Mon github</p>
                  <ArrowRight className="w-4 h-4 inline animate-ping" />
                </Button>
              </Link>
            </li>

            <li>
              <Link href="https://discord.gg/suleyyerli">
                <Button>
                  <span className=" font-medium">
                    <DiscordIcon className="w-4 h-4 inline" />
                  </span>{" "}
                  <p>Mon discord</p>
                  <ArrowRight className="w-4 h-4 inline animate-ping" />
                </Button>
              </Link>
            </li>
          </ul>
        </Card>

        {/* Section CV */}
        <Card className="card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden">
          <h2 className="text-lg font-bold mb-2 inline-block ">
            Télécharger mon CV
          </h2>

          <div className="flex justify-center mt-2">
            <Button className="bg-[#FAFAFA] text-[#000000]">
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
