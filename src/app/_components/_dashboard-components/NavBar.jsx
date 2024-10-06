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
    <nav className="relative bg-primary">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-screen-xl">
        <div className="flex items-center justify-between">
          <a href="/">
            <Image className="mainlogo" src="/logo.png" alt="Logo" />
          </a>
          <div className="flex lg:hidden">
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
          </div>
        </div>
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row`}
        >
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
      </div>
    </nav>
  );
};

export default Navbar;

// function NavBar() {
//   const showNavMenu = () => {};

//   return (
//     <div className="relative bg-[#ecf4ff]">
//       <div className="flex max-w-screen-xl py-4 mx-auto items-center justify-between">
//         <div>
//           <Image src={"/logo1.png"} alt="logo" width={110} height={110}></Image>
//         </div>
//         <div className="lg:hidden">
//           <button
//             type="button"
//             className="text-gray-500"
//             onClick={showNavMenu}
//             // aria-label="toggle menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 8h16M4 16h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-3 lg:text-lg">
//           <Link href={"/"}>Home</Link>
//           <Link href={"/"}>About</Link>
//           <Link href={"/"}>Reviews</Link>
//           <Link href={"/"}>Pricing</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
