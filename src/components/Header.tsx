import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="justify-between z-10">
      <div className="mt-3.5 ml-4 absolute">
        <Image
          src="/soller_logo.svg"
          alt="Soller Logo"
          width={81}
          height={36}
        />
      </div>

      <div className="object-fill w-full z-0 relative">
          <Image
            src="/workerImage.png"
            alt="Worker image"
            width={375}
            height={333}
            className="sm:w-[673px] sm:h-[694px] "
          />
        </div>
      </div>
  );
}
