import React, { JSX } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Presentation() {
  return (
  <div className="flex flex-col pb-12">
    <div className="relative bottom-32 sm:place-self-end">
          <Image
            src="/workerRight.svg"
            alt="Worker image"
            width={375}
            height={333}
            className="sm:w-[540px] sm:h-[540px] "
          />
    </div>
    <div className="flex flex-col gap-y-6 items-center text-center -mt-20 sm:-mt-24 md:place-self-start md:relative md:bottom-[420px]">
      <div className="flex flex-col gap-y-6 items-center text-center ">
        <h1 className="text-black text-[40px] font-semibold text-balance sm:w-[400px] md:w-[340px] md:text-start md:pl-8">Get the Sun
          to Power Your Home</h1>
        <h3 className="text-lg w-[343px] md:text-start md:pl-8">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</h3>
      </div>
        <div className="md:place-self-start md:pl-8">
          <Button color="primary">Request a quote</Button>
        </div>
    </div>
    <div className="flex flex-col pt-12 gap-y-4 m-8 sm:m-12 sm:w-[343px] place-self-center md:place-self-start md:relative md:bottom-[440px]">
      <div className="">
        <p>
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
        </p>
      </div>
      <div className="flex gap-x-4 items-center ">
        <span className="flex-none">
          <Image src="/user_image_profile.svg" alt="User image profile" width={64} height={64} />
        </span>
        <div>
          <span>
            <h5 className="text-lg">
              Rwanda Melfor
            </h5>
          </span>
          <span>
            <p className="font-light text-grey">
              zerowaste.com
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}
