import React from "react";
import Button from "./ui/Button";
import Testimony from "./ui/Testimony";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-y-6 items-center text-center bg-primary pb-12 pt-12 lg:relative lg:-mt-[550px] lg:items-start lg:pl-12 lg:z-20">
      <div className="flex flex-col items-center text-center">
        <span className="gap-x-2">
          <p className="text-secondary text-base font-medium lg:text-start xl:text-xl"> Join other Sun harvesters
          </p>
          <h2 className="text-white text-[32px] font-semibold text-balance lg:text-start xl:text-[56px] xl:w-[700px]">Make something awesome</h2>
        </span>
      </div>
      <div>
        <p className="text-white text-base font-extralight text-center w-[343px] lg:text-start xl:text-xl xl:w-[700px]">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
        </p>
      </div>
      <Button color="secondary" className="lg:place-self-end lg:mr-12 lg:relative lg:bottom-36 xl:bottom-48 xl:right-32" >Request a Quote</Button>
      <div className="flex gap-x-4 mt-16 lg:mt-0 lg:max-w-[1880px] lg:overflow-auto align-middle">
        <div className="md:flex md:flex-row md:gap-x-4 lg:gap-x-6">
          <Testimony className="md:block" testimony="Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod." imageProfile="user_image_profile2" name="Jane Cooper" description="10KWh"/>
          <Testimony className="hidden md:block" testimony="Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." imageProfile="user_image_profile3" name="Ralph Edwards" description="10KWh" />
          <Testimony className="hidden lg:block" testimony="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." imageProfile="user_image_profile4" name="Courtney Henry" description="10KWh" />
          <Testimony className="hidden lg:block" testimony="Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod." imageProfile="user_image_profile" name="Cameron Williamson" description="6KWh" />
          <Testimony className="hidden xl:block" testimony="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." imageProfile="user_image_profile3" name="Cameron Williamson" description="6KWh" />
          <Testimony className="hidden xl:block" testimony="Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." imageProfile="user_image_profile4" name="Cameron Williamson" description="6KWh" />
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Image src="/arrows.svg" alt="arrows button" width={120} height={48} />
      </div>
  </div> 
  )
}