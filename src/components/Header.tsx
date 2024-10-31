import Image from "next/image";
import React from "react";
import { RiHeadphoneLine } from "react-icons/ri";
import Button from "./ui/Button";

export default function Header() {
  return (
    <div className="flex justify-between sm:relative sm:flex-row z-10 px-4 mt-3.5 lg:mx-20">
      <div className="sm:flex sm:flex-row sm:gap-x-[38px] sm:items-center sm:align-middle ">
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
        <div className="invisible sm:visible sm:flex sm:flex-row sm:gap-x-4 sm:items-center text-blue sm:text-xs xl:text-base">
          <RiHeadphoneLine className="xl:hidden" size={16}/> <p className="xl:hidden">555 818 282</p>
          <RiHeadphoneLine className="hidden xl:flex" size={24}/> <p className="hidden xl:flex">555 818 282</p>
          <Button className="xl:hidden" size="sm" color="primary">Request a quote</Button>
          <Button className="hidden xl:flex" color="primary">Request a quote</Button>
        </div>
      </div>
    </div>
  );
}
