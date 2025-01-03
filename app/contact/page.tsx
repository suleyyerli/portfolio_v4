"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Contact() {
  return (
    <Card className="style-card">
      <div className="flex justify-center mt-2 flex-col">
        <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
          Télécharger mon CV
        </h2>

        <Button className="bg-button-light dark:bg-button-dark text-buttonText-light dark:text-buttonText-dark shadow-none">
          <a href="/cv.pdf" download="cv.pdf">
            CV
            <Download className="w-4 h-4 inline animate-bounce" />
          </a>
        </Button>

        <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
          Mon adresse email
        </h2>
        <p className="brillance">suley.yerli@gmail.com</p>
        <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block  text-[#0969DA] dark:text-darkText">
          Mon numéro de téléphone
        </h2>
        <p className="brillance">+33 6 14 92 46 21</p>
      </div>
    </Card>
  );
}
