"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Projet1() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/veille/Article4/Veille4.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-screen max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] markdown-custom">
        <ReactMarkdown
          components={{
            img: ({ src, alt, ...props }) => {
              const imagePath = src?.replace(
                "img/",
                "/markdown/veille/Article4/img/"
              );
              return (
                <img
                  src={imagePath}
                  alt={alt}
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
