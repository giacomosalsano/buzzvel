import Image from "next/image";
import React from "react";
import Section from "./Section";

export default function Services() {
  return (
    <div className="pt-[342px] pb-12 mx-4 mt-16">
      <div className="flex flex-col gap-y-6 items-center text-center mb-16">
        <span className="gap-x-2">
          <p className="text-orange text-base font-medium"> Services
          </p>
          <h2 className="text-black text-[32px] font-semibold text-balance">Personalized services</h2>
        </span>
        <p className="text-base w-[343px]">
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
      <div className="mt-4 ">
        <Image className="relative -left-4 z-0" src="/phone4.svg" alt="Phone illustration" width={523} height={599.56} />
      </div>
      
    </div> 
  )
}
