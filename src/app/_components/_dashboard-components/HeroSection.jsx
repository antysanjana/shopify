import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-[#ecf4ff]">
      <div className="flex max-w-screen-xl py-3 gap-4  mx-auto items-center justify-between">
        <div className="w-2/5">
          <h1 className="text-3xl text-[50px] leading-[60px] font-bold">
            Need a stunning and optimized web shop?
          </h1>
          <p className="text-2xl leading-[35px] mt-6 mb-8">
            Get high sales with the help of our Shopify Experts, E-Commerce
            Consultants & Skilled Web Developers
          </p>
          <Link href={"/"} className="green-link">
            Get a free quote
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            src={"/heroImage.png"}
            alt="hero image"
            width={800}
            height={700}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
