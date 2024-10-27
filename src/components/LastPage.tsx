import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function LastPage() {
  return (
    <div className="flex flex-col items-center pt-12 px-4 bg-primary">
      <div>
        <div className="flex flex-col items-center text-center ">
          <span className="gap-x-2 mb-6">
            <p className="text-secondary text-base font-medium"> Get the Sun to power your home
            </p>
            <h2 className="text-white text-[32px] font-semibold text-balance">All the power that you need for your house is now available</h2>
          </span>
        <Button color="secondary">Request a Quote</Button>
        </div>
        <div className="mt-4">
          <p className="text-white text-base font-extralight text-center w-[343px]">
            Egestas fringilla aliquam leo
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16 relative -left-6">
        <Image src="/macbook.svg" alt="Mackbook illustration" width={400} height={400} />
      </div>
    </div>
  )
}