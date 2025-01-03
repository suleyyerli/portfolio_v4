import React from "react";
import { Folder } from "lucide-react";

interface CardVeilleProps {
  id: number;
  title: string;
  onClick: () => void;
}

const CardVeille: React.FC<CardVeilleProps> = ({ title, onClick }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div
        className="flex items-center cursor-pointer hover:scale-105 transition-all duration-300"
        onClick={onClick}
      >
        <div className="flex-shrink-0">
          <Folder className="w-10 h-10 mr-4 text-lightText dark:text-darkText" />
        </div>
        <div className="p-4">
          <p className="text-xl text-lightText dark:text-darkText">{title}</p>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700 my-2" />
    </div>
  );
};

export default CardVeille;
