import React, { JSX } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Presentation() {
  return (
  <div className="mx-4 my-12 flex flex-col gap-y-16">
    <div className="flex flex-col gap-y-6 items-center text-center">
    <div className="">
      <h1 className="text-black text-[40px] font-semibold text-balance">Get the Sun to Power Your Home</h1>
      <h3 className="text-lg w-[343px]">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</h3>
    </div>
      <Button color="primary">Request a quote</Button>
    </div>
    <div className="gap-4 flex flex-col">
      <div className="text-left">
        <p>
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
        </p>
      </div>
      <div className="flex gap-x-4 items-center">
        <span className="flex-none">
          <Image src="/user_image_profile.png" alt="User image profile" width={64} height={64} />
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
