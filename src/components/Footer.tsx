import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-6 py-6 px-4 md:flex-row md:justify-between md:align-middle md:mx-20">
      <div className="flex flex-col gap-y-6 md:flex md:gap-x-6 items-center md:flex-row md:justify-between md:align-middle">
        <div className="">
          <Image src="/logo-grey.svg" alt="logo" width={120} height={48} />
        </div>
        <div>
          <p className="text-center ">
            @ 2023 Soller, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center ">
        <button>Terms</button>
        <button>Privacy</button>
        <button>Support</button>
      </div>
    </div>
  )
}