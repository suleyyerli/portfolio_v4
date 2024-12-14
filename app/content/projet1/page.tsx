"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Projet1() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/projects/projet1.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [content]);

  return (
    <div className="prose prose-lg dark:prose-invert  p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
