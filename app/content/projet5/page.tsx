"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Projet5() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/Projet5/tousportfolio.md")
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
                : `/markdown/Projet5/img/${src?.replace("img/", "")}`;
              return (
                <img
                  src={imagePath}
                  alt={alt || ""}
                  className="w-full rounded-lg"
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
