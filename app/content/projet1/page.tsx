"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import OptimizedImage from "@/components/OptimizedImage";

export default function Projet1() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/Projet1/NewVotecdc.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-screen max-w-[50%] md:max-w-[40%] lg:max-w-[800px] markdown-custom">
        <ReactMarkdown
          components={{
            img: ({ src, alt, ...props }) => {
              const imagePath = src?.startsWith("/")
                ? src
                : `/markdown/Projet1/img/${src?.replace("img/", "")}`;
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
