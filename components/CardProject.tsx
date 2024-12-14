import React from "react";

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
    <div
      className="max-w-sm cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <img
        src={image}
        alt="Project"
        className="w-full object-cover rounded-xl"
        style={{ width: "384px", height: "190px" }}
      />
      <div className="p-4 text-center">
        <p className="text-xl text-lightText dark:text-darkText">{title}</p>
        <p className="text-sm text-lightText dark:text-darkText">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
