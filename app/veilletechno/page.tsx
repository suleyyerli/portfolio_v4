"use client";
import { useRouter } from "next/navigation";
import CardVeille from "@/components/CardVeille";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    title: "Article 3",
  },
];

export default function Projets() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/content/veilletechno${id}`);
  };

  return (
    <div>
      <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 ">
        Veille technologique
      </h2>
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
        <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 ">
          Mes sources sont :
        </h2>
        <h2 className="mt-4 font-bold text-xl">Développement :</h2>
        <ul className="flex flex-col">
          <li>
            <Link href="https://www.youtube.com/@Micode">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@Micode
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@Underscore_">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@Underscore_
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@melvynxdev">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@melvynxdev
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>
          <h2 className="mt-4 font-bold text-xl">
            Docker / Système / Conteneurisation / Virtualisation :
          </h2>
          <li>
            <Link href="https://www.youtube.com/@cocadmin">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@cocadmin
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@TechSama">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@TechSama
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <h2 className="mt-4 font-bold text-xl">Journaux de presse :</h2>
          <li>
            <Link href="https://www.lemonde.fr/cybercriminalite/">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.lemonde.fr/cybercriminalite/
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.ibm.com/fr-fr/topics/docker">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.ibm.com/fr-fr/topics/docker
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.it-connect.fr/">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">https://www.it-connect.fr/</span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.lemondeinformatique.fr/">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.lemondeinformatique.fr/
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <h2 className="mt-4 font-bold text-xl">Cybersecurité :</h2>
          <li>
            <Link href="https://www.youtube.com/@wakedxy">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.youtube.com/@wakedxy
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>

          <li>
            <Link href="https://www.lemonde.fr/cybercriminalite/">
              <Button className="p-0 shadow-none dark:hover:bg-button-light/30 hover:bg-button-dark/30">
                <span className="font-mplus-rounded font-bold"></span>{" "}
                <span className="brillance">
                  https://www.lemonde.fr/cybercriminalite/
                </span>
                <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
