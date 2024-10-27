import Image from "next/image";
import React from "react";

export default function Introduction() {
  return (
    <div className="px-12 gap-x-16">
      <div className="flex flex-col gap-y-6 items-center text-center">
        <span className="gap-x-2">
          <p className="text-orange text-base font-medium"> No more waste
          </p>
          <h2 className="text-black text-[32px] font-semibold  text-balance">Pick the Sun</h2>
        </span>
        <p className="text-base z-30 w-[343px]">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="absolute">
        <Image className="relative bottom-16 right-12 z-10" src="/circles.svg" alt="Circles illustration" width={702.43} height={284} />
      </div>
      <div className="items-end absolute">
          <Image className="relative top-16 right-0 z-20" src="/desktop.svg" alt="Desktop illustration" width={358} height={205} />
      </div>
      
    </div>  
  );
}
