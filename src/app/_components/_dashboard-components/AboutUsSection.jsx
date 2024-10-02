import React from "react";

function AboutUsSection() {
  return (
    <div className="flex items-center max-w-screen-xl mx-auto mt-12 justify-between">
      <div className="w-1/5">
        <p className="font-bold">Bullzpot.com</p>
        <h1 className="text-[30px] font-bold">Mighty Web Services</h1>
      </div>
      <div className="grid grid-cols-2 gap-9 w-4/6">
        <div className="flex gap-8">
          <div className="h-[80px] w-[2px] bg-[#69ba2c]"></div>
          <div>
            <h1 className="text-[20px] font-bold">Shopify experts</h1>
            <p>Shopify Experts since 2017</p>
          </div>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="h-[80px] w-[2px] bg-[#69ba2c]"></div>
            <div>
              <h1 className="text-[20px] font-bold">100+ Projects</h1>
              <p>web and app projects completed with various businesses</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="h-[80px] w-[2px] bg-[#69ba2c]"></div>
            <div>
              <h1 className="text-[20px] font-bold">Dedicated team</h1>
              <p>
                In-house expert team dedicated to serving your specific needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="h-[80px] w-[2px] bg-[#69ba2c]"></div>
            <div>
              <h1 className="text-[20px] font-bold">Starting at $99</h1>
              <p>Top agency quality at freelance rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
