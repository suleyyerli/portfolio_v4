"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Projet3() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/Projet2/cdcpokeligame.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-screen max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] markdown-custom">
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
                <img
                  src={imagePath}
                  alt={alt || ""}
                  className={
                    isScreenshot
                      ? "w-[400px] inline-block m-2"
                      : "w-full rounded-lg"
                  }
                  {...props}
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
