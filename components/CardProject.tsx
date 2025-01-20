import React from "react";
import CustomCard from "./CustomCard";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
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
          <h2 className="text-lg font-medium mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </CustomCard>
    </div>
  );
};

export default CardProject;
