import Image from "next/image";
import React from "react";
import Section from "./ui/Section";

export default function Services() {
  return (
    <div className="pb-12 mt-16 lg:relative lg:justify-between lg:-mt-[750px] xl:mb-[420px] xl:overflow-hidden">
      <div className="flex flex-col gap-y-6 items-center text-center mb-16 lg:relative lg:-translate-x-[490px] lg:top-72 lg:mr-80 xl:translate-y-[380px] xl:-translate-x-96">
        <span className="gap-x-2">
          <p className="text-orange text-base font-medium lg:text-start xl:text-xl"> Services
          </p>
          <h2 className="text-black text-[32px] font-semibold text-balance lg:text-start xl:text-[56px] xl:w-[700px]">Personalized services</h2>
        </span>
        <p className="text-base w-[343px] lg:text-start lg:ml-8 xl:text-xl xl:ml-2 xl:w-[700px]">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. 
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </div>
      <div className="flex flex-col gap-y-6 lg:relative lg:translate-x-64 lg:top-72 lg:w-[600px] xl:translate-y-[380px] xl:translate-x-[530px] ">
        <div className="flex flex-row-2 justify-center gap-y-6 gap-x-12 sm:gap-x-24 md:gap-x-48 lg:ml-96 lg:gap-x-2 xl:gap-x-12 xl:ml-0">
          <Section title="Et mauris" description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." />
          <Section title="Eget sit" description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. " />
        </div>
        <div className="flex flex-row-2 justify-center gap-y-6 gap-x-12 sm:gap-x-24 md:gap-x-48 lg:ml-96 lg:gap-x-2 xl:gap-x-12 xl:ml-0 ">
          <Section title="Imperdiet pellentesque" description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." />
          <Section title="Non libero" description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra." />
        </div>
      </div>
      <div className="">
        <Image className="sm:place-self-end lg:relative lg:w-[420px] lg:h-[900px] lg:bottom-[440px]  xl:w-[900px] xl:h-[900px] xl:translate-y-96 xl:translate-x-32 " src="/phone3.svg" alt="Phone illustration" width={491} height={491} />
      </div>
      
    </div> 
  )
}
