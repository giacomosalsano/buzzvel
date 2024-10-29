import Image from "next/image";
import React from "react";
import { RiHeadphoneLine } from "react-icons/ri";
import Button from "./Button";

export default function Header() {
  return (
    <div className="flex sm:flex-row justify-between sm:relative z-10 px-4 mt-3.5 ">
      <div className="sm:flex sm:flex-row sm:gap-x-[38px] sm:items-center sm:align-middle">
        <div className="">
          <Image
            src="/soller_logo.svg"
            alt="Soller Logo"
            width={81}
            height={36}
          />
        </div>
        <div className="invisible sm:visible flex gap-x-4 sm:text-xs">
          <button>Products</button>
          <button>Solutions</button>
          <button>Services</button>
          <button>Configure</button>
        </div>
      </div>
      <div>
        <div className="invisible sm:visible sm:flex sm:flex-row sm:gap-x-4 sm:items-center text-blue sm:text-xs">
          <RiHeadphoneLine  size={16}/> <p>555 818 282</p>
          <Button size="sm" color="primary">Request a quote</Button>
        </div>
      </div>
    </div>
  );
}
