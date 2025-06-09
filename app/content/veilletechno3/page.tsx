"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import OptimizedImage from "@/components/OptimizedImage";

export default function Projet1() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/veille/Article3/Veille3.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-screen max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] markdown-custom">
        <ReactMarkdown
          components={{
            img: ({ src, alt, ...props }) => {
              const imagePath = src
                ? `/markdown/veille/Article3/img/${src.replace("img/", "")}`
                : "";
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
