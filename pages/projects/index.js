import Link from "next/link";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import wordle from "../../public/wordle.png";
import visualizer from "../../public/visualizer.png";
import website from "../../public/website.png";

const index = () => {
  return (
    <div>
      <Layout>
        <main className="mt-12 max-w-3xl w-full px-4 flex flex-col gap-16 my-0 mx-auto tracking-wide">
          <div className="flex sm:gap-8 gap-2 flex-col sm:flex-row ">
            <div className="flex sm:w-32 gap-2  sm:justify-start sm:flex-col">
              <a
                className="text-inherit border text-center border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white  transition-all"
                target="_blank"
                href="https://github.com/Ulugbek4real/searchAlgorithms-visualizer"
              >
                Source code
              </a>
              <Link
                className="text-inherit border border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white text-center transition-all"
                href="/projects/visualizer"
              >
                View Live
              </Link>
            </div>
            <div className=" flex-1 flex flex-col gap-1 border dark:border-neutral-600 rounded-md p-4 sm:p-8">
              <h3 className=" text-lg">Path Finding Visualizer</h3>
              <p className="text-neutral-500 tracking-wide">
                I currently work at Bitrefill, mainly focusing on search &
                discovery. I also lead design & development of the design
                system.
              </p>
              <Link
                className=" w-fit text-inherit mb-4 border-b-2 border-black  dark:border-neutral-600"
                href="/posts/b5f08d4c-ac29-4803-a0f2-52b59713a3e5"
              >
                Read case study
              </Link>
              <Image
                className="rounded-md shadow-md"
                alt="project img"
                src={visualizer}
              ></Image>
            </div>
          </div>

          <div className="flex sm:gap-8 gap-3 flex-col sm:flex-row">
            <div className="flex sm:w-32 gap-2 sm:justify-start sm:flex-col">
              <a
                className="text-inherit border border-neutral-200 dark:border-neutral-600 rounded-md px-2 hover:bg-neutral-800 hover:text-white text-center transition-all"
                target="_blank"
                href="https://github.com/Ulugbek4real/searchAlgorithms-visualizer"
              >
                Source code
              </a>
              <Link
                className="text-inherit border border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white text-center transition-all"
                href="/projects/wordle"
              >
                View Live
              </Link>
            </div>
            <div className="flex-1 flex flex-col gap-1 border dark:border-neutral-600 rounded-md p-4 sm:p-8">
              <h3 className=" text-lg">Wordle anytime</h3>
              <p className="text-neutral-500">
                I currently work at Bitrefill, mainly focusing on search &
                discovery. I also lead design & development of the design
                system.
              </p>
              <Link
                className=" w-fit text-inherit mb-4 border-b-2 border-black dark:border-neutral-600"
                href="/posts/b5f08d4c-ac29-4803-a0f2-52b59713a3e5"
              >
                Read case study
              </Link>
              <Image
                className="rounded-md shadow-md"
                alt="project img"
                src={wordle}
              ></Image>
            </div>
          </div>

          <div className="flex sm:gap-8 gap-2 flex-col sm:flex-row ">
            <div className="flex sm:w-32 gap-2  sm:justify-start sm:flex-col">
              <a
                className="text-inherit border text-center border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white  transition-all"
                target="_blank"
                href="https://github.com/Ulugbek4real/searchAlgorithms-visualizer"
              >
                Source code
              </a>
              <Link
                className="text-inherit border border-neutral-200 dark:border-neutral-600  rounded-md px-2 hover:bg-neutral-800 hover:text-white text-center transition-all"
                href="/projects/visualizer"
              >
                View Live
              </Link>
            </div>
            <div className=" flex-1 flex flex-col gap-1 border dark:border-neutral-600 rounded-md p-4 sm:p-8">
              <h3 className=" text-lg">My Website</h3>
              <p className="text-neutral-500 tracking-wide">
                I currently work at Bitrefill, mainly focusing on search &
                discovery. I also lead design & development of the design
                system.
              </p>
              <Link
                className=" w-fit text-inherit mb-4 border-b-2 border-black  dark:border-neutral-600"
                href="/posts/b5f08d4c-ac29-4803-a0f2-52b59713a3e5"
              >
                Read case study
              </Link>
              <Image
                className="rounded-md shadow-md"
                alt="project img"
                src={website}
              ></Image>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default index;
