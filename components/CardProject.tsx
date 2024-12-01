import React from "react";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  onClick: (id: number) => void;
}

const CardProject: React.FC<CardProjectProps> = ({
  id,
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div className="max-w-sm cursor-pointer" onClick={() => onClick(id)}>
      <img
        src={image}
        alt="Project"
        className="w-full object-cover rounded-xl"
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
