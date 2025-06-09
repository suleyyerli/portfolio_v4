"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projet6() {
  const router = useRouter();

  useEffect(() => {
    window.open("/projet_pdf/projet_pointage.pdf", "_blank");
    router.back();
  }, [router]);

  return null;
}
