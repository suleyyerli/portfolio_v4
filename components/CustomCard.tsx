import React, { useEffect } from "react";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  className,
  onClick,
}) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-hover");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const event = e as MouseEvent;
        const element = card as HTMLElement;
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }, []);

  return (
    <div
      onClick={onClick}
      className={`card-hover relative rounded-2xl border border-zinc-900 p-3 hover:-translate-y-1 transition-all before:absolute before:w-[200px] before:h-[200px] before:bg-zinc-400/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity hover:before:opacity-100 before:blur-3xl before:[transform:translate(calc(var(--mouse-x,0)-100px),calc(var(--mouse-y,0)-100px))] before:[transition:transform_0.1s] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomCard;
