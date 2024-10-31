import React from "react";
import { FiAlertCircle } from "react-icons/fi";

interface SectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function Section({  title, description }: SectionProps) {
  return (
    <div className="gap-y-2 max-h-[253px] max-w-[147.5px]  lg:max-h-[181px] lg:place-items-start  lg:max-w-[566px] lg:w-[566px] lg:justify-start">
        <span className="flex justify-center lg:max-w-[566px] lg:w-[566px] lg:justify-start lg:mb-4">
          <FiAlertCircle size={64} className="text-white "/>
        </span>
        <h2 className="text-black text-[20px] font-medium text-center lg:text-start xl:text-2xl xl:max-w-[566px] xl:w-[566px] xl:mb-4">{title}</h2>
        <p className="text-base text-center lg:text-start xl:text-lg xl:max-w-[566px] xl:w-[566px] ">{description}</p>
    </div>
  );
}
