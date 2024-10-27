import Image from "next/image";
import React from "react";
import Section from "./Section";

export default function Services() {
  return (
    <div className="pb-12 mx-4 mt-16">
      <div className="flex flex-col gap-y-6 items-center text-center mb-16">
        <span className="gap-x-2">
          <p className="text-orange text-base font-medium"> Services
          </p>
          <h2 className="text-black text-[32px] font-extrabold text-balance">Personalized services</h2>
        </span>
        <p className="text-base ">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. 
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row-2 justify-center gap-y-6 gap-x-12">
          <Section title="Et mauris" description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." />
          <Section title="Eget sit" description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. " />
        </div>
        <div className="flex flex-row-2 justify-center gap-y-6 gap-x-12">
          <Section title="Imperdiet pellentesque" description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." />
          <Section title="Non libero" description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra." />
        </div>
      </div>
      <div className="">
        <Image className="relative -right-4" src="/phone3.svg" alt="Phone illustration" width={491} height={491} />
      </div>
      
    </div> 
  )
}
