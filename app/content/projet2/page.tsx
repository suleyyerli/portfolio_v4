"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import OptimizedImage from "@/components/OptimizedImage";

export default function Projet2() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/Projet2/cdcpokeligame.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-screen max-w-[70%] md:max-w-[50%] lg:max-w-[1000px] markdown-custom">
        <ReactMarkdown
          components={{
            img: ({ src, alt, ...props }) => {
              const imagePath = src?.startsWith("/")
                ? src
                : `/markdown/Projet2/img/${src?.replace("img/", "")}`;

              // Vérifier si c'est une des images à redimensionner
              const isScreenshot = [
                "acceuil.png",
                "collection.png",
                "statistique.png",
                "formulaire.png",
                "wireacceuil.png",
                "wirecollection.png",
                "wirestats.png",
                "wireformulaire.png",
                "stack.png",
                "buttonadd.png",
                "buttonauth.png",
                "nav.png",
              ].includes(src?.replace("img/", "") || "");

              return (
                <OptimizedImage
                  src={imagePath}
                  alt={alt || ""}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
