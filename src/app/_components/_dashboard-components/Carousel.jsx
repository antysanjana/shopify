import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { carouselData } from "@/app/lib/corouselData";

function Carousel() {
  return (
    <div className="bg-[#ecf4ff]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center gap-40">
          <div className="h-[2px] w-[30%] bg-[#DFDFDF]"></div>
          <h1 className="text-lg font-semibold">What We Offer</h1>
          <div className="h-[2px] w-[30%] bg-[#DFDFDF]" s></div>
        </div>
        <div className="w-full">
          <InfiniteMovingCards
            items={carouselData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
