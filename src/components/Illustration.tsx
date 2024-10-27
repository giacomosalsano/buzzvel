import React from "react";
import Image from "next/image";

export default function Illustration() {
  return (
    <div>
      <div className="absolute">
        <Image className="relative top-10 right-12 z-0 shadow-sm" src="/backgroundBubble.svg" alt="Bubbles illustration" width={599.56} height={523} />
      </div>
      <div className="items-end absolute">
          <Image className="relative top-24 left-36 z-10  drop-shadow-sm" src="/phone1.svg" alt="Phone illustration" width={220} height={471.43} />
      </div>
      <div className="items-end absolute">
          <Image className="relative top-[190px] left-[252px] z-20  drop-shadow-sm opacity-85" src="/frame4.svg" alt="Frame of the phone illustration" width={125} height={103.09} />
      </div>
    </div>
  )
}