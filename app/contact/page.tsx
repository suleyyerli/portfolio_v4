"use client";
import CustomCard from "@/components/customCard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Contact() {
  return (
    <CustomCard className="mt-10">
      <div className="flex justify-center mt-2 flex-col">
        <h2 className="text-lg font-bold mb-2 inline-block">
          Télécharger mon CV
        </h2>

        <Button className="hover:bg-zinc-900 bg-zinc-800">
          <a href="/cv.pdf" download="cv.pdf">
            CV
            <Download className="w-4 h-4 inline animate-bounce" />
          </a>
        </Button>

        <h2 className="text-lg font-bold mb-2 inline-block">
          Mon adresse email
        </h2>
        <p>suley.yerli@gmail.com</p>
        <h2 className="text-lg font-bold mb-2 inline-block">
          Mon numéro de téléphone
        </h2>
        <p>+33 6 14 92 46 21</p>
      </div>
    </CustomCard>
  );
}
