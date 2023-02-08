import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ source, desc, path, img, name }) => {
  return (
    <div className="flex sm:gap-8 gap-2 flex-col sm:flex-row ">
      <div className="flex sm:w-32 gap-2  sm:justify-start sm:flex-col">
        <a
          className="text-inherit border text-center border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white  transition-all"
          target="_blank"
          href={source}
        >
          Source code
        </a>
        <Link
          className="text-inherit border border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white text-center transition-all"
          href={path}
        >
          View Live
        </Link>
      </div>
      <div className=" flex-1 flex flex-col gap-1 border dark:border-neutral-600 rounded-md p-4 sm:p-8">
        <h3 className=" text-lg">{name}</h3>
        <p className="text-neutral-500 tracking-wide">{desc}</p>
        <Link
          className=" w-fit text-inherit mb-4 border-b-2 border-black  dark:border-neutral-600"
          href="/posts/c2c1dddb-6d52-4e0b-b7ed-b795d8cfe8e0"
        >
          Read case study
        </Link>
        <Image
          className="rounded-md shadow-md"
          alt="project img"
          src={img}
        ></Image>
      </div>
    </div>
  );
};

export default Project;
