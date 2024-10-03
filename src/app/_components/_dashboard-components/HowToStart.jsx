import Link from "next/link";
import React from "react";
import Image from "next/image";

function HowToStart() {
  return (
    <div className=" bg-[#052a3d]">
      <div className="relative flex flex-col gap-8 items-center text-white max-w-screen-xl py-20 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] font-bold leading-[50px]">
            How to Start!
          </h1>
          <p className="text-2xl font-medium mt-8">
            High Quality Projects Get Done, Super-Easy & Fast!
          </p>
        </div>
        <div className="flex mt-10 gap-5">
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image src={"/data.png"} alt="" width={80} height={80}></Image>
            </div>
            <div className="text-2xl font-bold">
              <h1>Brief us about your project</h1>
            </div>
            <div className="text-base text-center w-4/5">
              <p>
                Let us know about your website project requirements - any
                customization request.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image src={"/data1.png"} alt="" width={80} height={80}></Image>
            </div>
            <div className="text-xl font-bold">
              <h1>Confirm the quotation</h1>
            </div>
            <div className="text-base text-center w-4/5">
              <p>
                We&apos;ll swiftly provide a customized quote. Once you approve,
                let us take care of the rest!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image src={"/data2.png"} alt="" width={80} height={80}></Image>
            </div>
            <div className="text-2xl font-bold">
              <h1>Get it Done</h1>
            </div>
            <div className="text-base text-center w-4/5">
              <p>
                Boom ... your high converting web or app customization will be
                done - on time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href={"/"} className="green-link">
            Get a free quote
          </Link>
        </div>
        <div className="absolute left-[200px] bottom-[60px]">
          <Image
            src={"/arrow-left.webp"}
            alt=""
            width={200}
            height={50}
          ></Image>
        </div>
        <div className="absolute right-[280px] top-[300px]">
          <Image
            src={"/arrow-right.webp"}
            alt=""
            width={200}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HowToStart;
