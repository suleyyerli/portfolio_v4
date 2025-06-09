"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Code } from "lucide-react";
import { GithubIcon } from "@/icons/GithubIcon";
import { DiscordIcon } from "@/icons/DiscordIcon";
import { Badge } from "@/components/ui/badge";
import Espace from "@/components/Espace";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import CustomCard from "@/components/CustomCard";
import { Infinite } from "@/components/InfiniteScroll";
import { BorderBeam } from "@/components/ui/border-beam";
export default function Accueil() {
  return (
    <div className="mx-auto relative">
      <Espace />
      {/* Carte de bienvenue */}

      {/* Layout en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Profile */}
        <Card className="card-hover relative rounded-sm border border-zinc-800 p-3 md:col-span-2 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Yerli Süleyman</h1>
              <h1>Développeur Junior ( Fullstack / ERP / )</h1>
            </div>
            <Avatar className="w-24 h-24 border border-zinc-800">
              <BorderBeam className="w-24 h-24" />
              <AvatarImage src="/autre/avatar2.png" className="rounded-sm" />
              <AvatarFallback>CN</AvatarFallback>
              <BorderBeam className="w-24 h-24" />
            </Avatar>
          </div>
        </Card>

        {/* Section Description */}
        <div className=" md:col-span-2">
          <h2 className="text-lg font-medium mb-2">Description</h2>
          <Separator className="bg-zinc-800 my-2" />
          <p className="text-base">
            Je suis étudiant en alternance en 👨‍🎓
            <span className="font-medium text-[#FAFAFA]">BTS SIO</span>{" "}
            spécialisé <span className="font-medium text-[#FAFAFA]">SLAM</span>,
            passionné d&apos;informatique 💻. Mon parcours m&apos;a permis de
            combiner théorie et expérience professionnelle, avec des projets
            concrets en entreprise 🏢, incluant le développement d&apos;outil
            pour faciliter le travail en usine 🏭, maîtrise et développement sur{" "}
            <span className="font-medium text-[#FAFAFA]">ERP</span> 🔧.
            J&apos;aime expérimenter de nouveaux outils et frameworks pour
            affiner mes compétences ⚡. Je suis curieux et j&apos;aime apprendre
            de nouvelles choses 🦀.
          </p>
          <div className="flex justify-center mt-2">
            <Button className="bg-zinc-900 text-[#FAFAFA]">
              <Link href="/projets">
                Mon portfolio
                <ArrowUpRight className="w-4 h-4 inline animate-bounce" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Section Bio */}
        <CustomCard>
          <h2 className="text-lg font-medium mb-2">Bio</h2>
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
        </CustomCard>

        {/* Section J'aime */}
        <CustomCard className="">
          <h2 className="text-lg font-medium mb-2">
            J&apos; <Heart className="w-4 h-4 inline" />
          </h2>
          <p className="text-sm">
            Programmation, Sport, Voyage, Gaming, Ski, Musique , Lord of the
            Rings, Harry Potter, Anime, Manga,
          </p>
        </CustomCard>

        {/* Section Mes logiciels de choix */}
        <div className=" p-3 md:col-span-2 ">
          <h2 className="text-lg font-medium mb-2 inline-block">
            Mes logiciels de choix
          </h2>
          <div className="overflow-hidden">
            <div className="flex gap-6">
              <Infinite />
            </div>
          </div>
        </div>

        {/* Section Compétences */}
        <CustomCard>
          <h2 className="text-lg font-medium mb-2">Compétences</h2>
          <div>
            <ul className="flex flex-wrap gap-2 text-sm">
              <li>
                <Badge className=" border-[#fcd35e]">Javascript</Badge>
              </li>

              <li>
                <Badge className="border-[#0083f0]">React</Badge>
              </li>
              <li>
                <Badge className="border-[#b2babb]">Next.js</Badge>
              </li>
              <li>
                <Badge className="border-[#0083f0]">Docker</Badge>
              </li>
              <li>
                <Badge className="border-[#b2babb]/50">Github</Badge>
              </li>
              <li>
                <Badge className="border-[#dd4814]">Linux</Badge>
              </li>
              <li>
                <Badge className="border-[#58d68d]">SQL</Badge>
              </li>
              <li>
                <Badge className="border-[#29dada]">Diapason ERP</Badge>
              </li>
            </ul>
          </div>
        </CustomCard>

        {/* Section Web */}
        <CustomCard>
          <h2 className="text-lg font-medium mb-2">
            Web <Code className="w-4 h-4 inline" />
          </h2>
          <ul>
            <li>
              <Link href="https://github.com/suleyyerli">
                <Button className="hover:bg-zinc-900">
                  <span className=" font-medium">
                    <GithubIcon className="w-4 h-4 inline" />
                  </span>{" "}
                  <p>Github</p>
                  <ArrowUpRight className="w-4 h-4 inline animate-bounce text-[#000000]" />
                </Button>
              </Link>
            </li>

            <li>
              <Link href="https://discord.gg/suleyyerli">
                <Button className="hover:bg-zinc-900">
                  <span className=" font-medium">
                    <DiscordIcon className="w-4 h-4 inline" />
                  </span>{" "}
                  <p>Discord</p>
                  <ArrowUpRight className="w-4 h-4 inline animate-bounce text-[#000000]" />
                </Button>
              </Link>
            </li>
          </ul>
        </CustomCard>

        {/* Section CV */}
        <CustomCard>
          <h2 className="text-lg font-bold mb-2">Télécharger mon CV</h2>

          <div className="flex justify-center mt-2">
            <Button className="bg-[#FAFAFA] text-[#000000]">
              <a href="/autre/cv_suleyman.pdf" download="cv.pdf">
                CV
                <ArrowUpRight className="w-4 h-4 inline animate-bounce" />
              </a>
            </Button>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
