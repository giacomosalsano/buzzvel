import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between mb-8">
      <div className="ms-6 mt-3.5 absolute z-10">
        <Image
          src="/soller_logo.svg"
          alt="Soller Logo"
          width={81}
          height={36}
        />
      </div>
    </div>
  );
}
