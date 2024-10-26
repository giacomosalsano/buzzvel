import React from "react";
import { tv } from "tailwind-variants";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
}

const button = tv({
  base: "rounded-full px-6 py-5 gap-6 text-2xl font-bold transition-colors duration-200 focus:outline-none flex items-center",
  variants: {
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-4 py-2",
      md: "text- px-6 py-3",
      lg: "text-lg px-8 py-4",
      xl: "text-xl px-10 py-5",
      "2xl": "text-2xl px-12 py-6",
    },
    color: {
      primary: "bg-white text-primary border border-primary hover:bg-primary hover:text-secondary",
      secondary: "bg-white border border-secondary text-secondary hover:bg-secondary hover:text-primary",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "2xl",
  },
});

export default function Button({ size, color, children }: ButtonProps) {
  return (
    <button className={button({ size, color })}>{children} <FiArrowRight size={24} /></button>
  );
}
