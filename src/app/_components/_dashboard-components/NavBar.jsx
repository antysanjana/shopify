import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="relative bg-[#ecf4ff]">
      <div className="flex max-w-screen-xl py-4 mx-auto items-center justify-between">
        <div>
          <Image src={"/logo1.png"} alt="logo" width={110} height={110}></Image>
        </div>
        <div className="flex gap-3 text-lg">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Reviews</Link>
          <Link href={"/"}>Pricing</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
