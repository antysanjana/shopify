import Image from "next/image";
import Link from "next/link";
import React from "react";

const TaskRequestComponent = () => {
  return (
    <div className="mb-5 max-w-screen-xl mx-auto text-center border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
      <div className="flex justify-center">
        <Image src={"/task.png"} alt="" width={50} height={50}></Image>
      </div>
      <h1 className="text-2xl font-bold color-primary mt-5 md:mt-6 mb-4">
        And much more!
      </h1>
      <p className="text-base color-primary md:w-2/5 m-auto">
        Can&apos;t find what you need? Submit a task request, and our team will
        quickly confirm the project and start working on it.
      </p>
      <div className="flex justify-center my-6">
        <Link href={"/"} className="green-link flex items-center">
          Get a Free Quote
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="ml-1"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TaskRequestComponent;
