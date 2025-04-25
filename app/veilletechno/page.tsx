"use client";
import { useRouter } from "next/navigation";
import CardVeille from "@/components/CardVeille";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Espace from "@/components/Espace";

const veilleTechno = [
  {
    id: 1,
    title: "Comment j'effectue ma veille technologique",
  },
  {
    id: 2,
    title: "Docker et Docker-compose",
  },
  {
    id: 3,
    title: "RUST vs C++",
  },
  {
    id: 4,
    title: "Coolify : un outil de monitoring pour Docker",
  },
];

export default function Projets() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/content/veilletechno${id}`);
  };

  return (
    <div>
      <Espace />
      <h2 className="text-lg font-bold mb-2">Veille technologique</h2>
      <div className="mt-4 "></div>
      <div className="flex flex-col space-y-4">
        {veilleTechno.map((project) => (
          <CardVeille
            key={project.id}
            {...project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Mes sources</h2>
        <h2 className="mt-4 text-lg font-bold mb-2">Développement :</h2>
        <ul className="flex flex-col">
          <li>
            <Link href="https://www.youtube.com/@Micode">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@Micode
                </span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@Underscore_">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@Underscore_
                </span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@melvynxdev">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                https://www.youtube.com/@melvynxdev
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>
          <h2 className="mt-4 font-bold text-xl">
            Docker / Système / Conteneurisation / Virtualisation :
          </h2>
          <li>
            <Link href="https://www.youtube.com/@cocadmin">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.youtube.com/@cocadmin</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@TechSama">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.youtube.com/@TechSama</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <h2 className="mt-4 text-lg font-bold mb-2">Articles de presse :</h2>
          <li>
            <Link href="https://www.lemonde.fr/cybercriminalite/">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.lemonde.fr/cybercriminalite/</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.ibm.com/fr-fr/topics/docker">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span className="brillance">
                  https://www.ibm.com/fr-fr/topics/docker
                </span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.it-connect.fr/">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.it-connect.fr/</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.lemondeinformatique.fr/">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.lemondeinformatique.fr/</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <h2 className="mt-4 text-lg font-bold mb-2">Cybersecurité :</h2>
          <li>
            <Link href="https://www.youtube.com/@wakedxy">
              <Button className=" p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.youtube.com/@wakedxy</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.lemonde.fr/cybercriminalite/">
              <Button className="p-2 shadow-none hover:bg-zinc-900">
                <span className="font-bold"></span>{" "}
                <span>https://www.lemonde.fr/cybercriminalite/</span>
                <ArrowUpRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
