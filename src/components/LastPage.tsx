import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function LastPage() {
  return (
    <div className="flex flex-col items-center pt-12 bg-primary lg:bg-purple lg:pt-0 lg:max-h-[800px] xl:max-h-[949px] overflow-hidden">
      <div className="lg:relative lg:z-20">
        <div className="flex flex-col items-center text-center lg:text-start">
          <span className="gap-x-2 mb-6 lg:relative lg:right-44 lg:top-44 lg:mb-0">
            <p className="text-secondary text-base font-medium "> Get the Sun to power your home
            </p>
            <h2 className="text-white text-[32px] font-semibold text-balance lg:text-start lg:w-[600px] xl:w-[894px]">All the power that you need for
              your house is now available</h2>
          </span>
        <Button className="lg:place-self-end lg:relative lg:-bottom-10 lg:left-40" color="secondary">Request a Quote</Button>
        </div>
        <div className="mt-4">
          <p className="text-white text-base font-extralight text-center w-[343px] place-self-center lg:place-self-end  lg:relative lg:-bottom-10 lg:left-56">
            Egestas fringilla aliquam leo
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16 relative -left-6 w-[358px] drop-shadow-sm sm:right-64 sm:w-[640px] md:w-[768px] lg:hidden">
        <Image src="/macbook.svg" alt="Mackbook illustration" width={800} height={400} />
      </div>
      <div className="lg:block z-0 lg:-translate-y-80 lg:translate-x-48 lg:max-w-[1024px]">
        <Image className="" src="/macbook2.svg" alt="Mackbook illustration" width={1575} height={1172} />
      </div>
    </div>
  )
}