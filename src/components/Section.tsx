import React from "react";
import { FiAlertCircle } from "react-icons/fi";

interface SectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function Section({  title, description }: SectionProps) {
  return (
    <div className="gap-y-2 max-h-[253px] max-w-[147.5px] lg:max-w-[263px] lg:max-h-[181px] lg:place-items-start xl:max-w-[566px]">
        <span className="flex justify-center">
          <FiAlertCircle size={64} className="text-gray-400 "/>
        </span>
        <h2 className="text-black text-[20px] font-medium text-center lg:text-start">{title}</h2>
        <p className="text-base text-center lg:text-start">{description}</p>
    </div>
  );
}
