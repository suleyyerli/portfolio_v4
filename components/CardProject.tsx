import React from "react";
import CustomCard from "./CustomCard";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { GithubIcon } from "@/icons/GithubIcon";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  onClick: () => void;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
  githubUrl,
  onClick,
}) => {
  return (
    <div className="relative">
      <CustomCard onClick={onClick} className="cursor-pointer">
        <img
          src={image}
          alt="Project"
          className="object-cover rounded-xl"
          style={{ width: "300px", height: "150px" }}
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-medium">{title}</h2>
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge className="relative bg-transparent border border-white text-white hover:scale-110">
                  <GithubIcon className="w-4 h-4" />
                </Badge>
              </Link>
            )}
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </CustomCard>
    </div>
  );
};

export default CardProject;
