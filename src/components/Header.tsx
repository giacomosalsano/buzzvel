import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="mt-4 ml-4">
        <Image
          src="/soller_logo.svg"
          alt="Soller Logo"
          width={120}
          height={120}
        />
      </div>

      <div className="">
          <Image
            src="/worker.png"
            alt="Worker image"
            width={383.02}
            height={233.68}
            className="sm:w-[673px] sm:h-[694px]"
          />
        </div>
      </div>
  );
}
