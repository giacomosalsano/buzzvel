import Image from "next/image";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";

interface TestimonyProps {
  testimony: string
  imageProfile: React.ReactNode;
  name: string
  description: string
}

export default function Testimony({  testimony, imageProfile, name, description }: TestimonyProps) {
  return (
    <div className="flex flex-col w-[343px] bg-white rounded-xl p-8 relative -right-6">
        <div className="flex flex-col gap-y-4">
          <FiAlertCircle size={64} className="text-gray-400"/>
          <div className="flex">
            <p className="text-left">{testimony}</p>
          </div>
          <div className="flex gap-x-4 items-center w-[294px] align-baseline pt-4">
              <span className="">
                <Image className="rounded-full sm:w-[64px] sm:h-[64px]" src={`/${imageProfile}.png`} alt="User image profile" width={48} height={48} />
              </span>
              <div className="flex flex-col items-start ">
                <span>
                  <h5 className="text-lg">
                    {name}
                  </h5>
                </span>
                <span>
                  <p className="font-light text-grey">
                    {description}
                  </p>
                </span>
              </div>
          </div>
        </div>
    </div>
  );
}
