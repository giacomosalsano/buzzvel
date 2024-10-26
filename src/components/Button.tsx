import React from "react";
import { tv } from "tailwind-variants";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
}

const button = tv({
  base: "rounded-full p-3 font-semibold transition-colors duration-200 focus:outline-none flex items-center gap-2",
  variants: {
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-md px-6 py-3",
      lg: "text-lg px-8 py-4",
    },
    color: {
      primary: "bg-white text-primary border border-primary hover:bg-primary hover:text-secondary",
      secondary: "bg-white border border-secondary text-secondary hover:bg-secondary hover:text-primary",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export default function Button({ size, color, children }: ButtonProps) {
  return (
    <button className={button({ size, color })}>{children} <FiArrowRight size={14} /></button>
  );
}
