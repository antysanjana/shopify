"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-[#ecf4ff]">
      <div className="mx-auto flex justify-between items-center py-4 max-w-screen-xl w-10/12">
        <div className="flex w-screen items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={72} height={72} />
          </Link>
          <div className="flex border justify-between lg:hidden">
            {isOpen ? null : (
              <button
                type="button"
                className="text-gray-500"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div
          className={`absolute z-20 w-screen px-6 py-4 duration-300 ease-in-out translate-x-0 opacity-100 bg-gray-500 flex flex-col p-4 lg:items-center lg:space-x-4   ${
            isOpen ? "flex flex-col" : "hidden"
          }lg:flex lg:flex-row`}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Link aria-current="page" className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/about-us">
                About
              </Link>
              <Link className="nav-link" href="/reviews">
                Reviews
              </Link>
              <Link className="nav-link" href="/pricing">
                Pricing
              </Link>
            </div>
            <div className="lg-hidden">
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ${
//   isOpen ? "flex" : "hidden"
// }
