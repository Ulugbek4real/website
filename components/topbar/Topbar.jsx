import Link from "next/link";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiLink } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/router";
import myProfile from "../../public/myProf.jpg";
import { FaSlackHash } from "react-icons/fa";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitterSquare, FaTelegram } from "react-icons/fa";

const Topbar = () => {
  const router = useRouter();
  const onPostPage = router.pathname.split("/")[1] == "posts";
  const onLinksPage = router.pathname.split("/")[1] == "links";
  const onProjectsPage = router.pathname.split("/")[1] == "projects";
  const [showText, setShowText] = React.useState(false);

  return (
    <div
      className={`${
        onPostPage ? "hidden " : ""
      }" flex flex-col gap-4 sm:gap-8 w-full pt-6 sm:pt-10 px-5 my-0 mx-auto max-w-3xl topbar"`}
    >
      <div className=" flex justify-between items-center topbar-header">
        <div className=" flex items-center gap-2  header-name">
          {onLinksPage ? (
            <HiLink className="bg-neutral-200 hover:bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:transition-all  h-7 w-7 rounded-full p-1 " />
          ) : onProjectsPage ? (
            <FaSlackHash className="bg-neutral-200 hover:bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:transition-all  h-7 w-7 rounded-full p-1 " />
          ) : (
            <Image
              src={myProfile}
              alt="Ulugbek Nurmatov profile image"
              className=" w-12 h-12 object-cover rounded-full lg:hidden"
            />
          )}
          <h1 className=" text-2xl sm:text-3xl font-bold">
            {onLinksPage ? "Ulugbek's Links" : onProjectsPage ? "Featured Projects" : "Ulugbek Nurmatov"}
          </h1>
        </div>
        <div
          onClick={() => setShowText(!showText)}
          className=" cursor-pointer w-10 h-10 flex justify-center items-center  hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500  dark:text-neutral-100 text-2xl"
        >
          <BiDotsHorizontalRounded />
        </div>
      </div>
      {showText && (
        <div className="sm:hidden flex flex-col gap-2">
          <p className="text-stone-500 text-sm  ">
            I'm a full-stack Software Engineer based in Seoul, South Korea. Here you'll find my personal blog posts and
            case studies.
          </p>
          <div className="flex gap-2 ">
            <a href="https://instagram.com/ulugbek4real" target="_blank">
              <FaInstagram className="instagram-icon text-2xl text-pink-600" />
            </a>
            <a href="https://t.me/ulugbek4real_blog" target="_blank">
              <FaTelegram className="twitter-icon text-2xl  text-sky-500" />
            </a>
            <a href="https://www.linkedin.com/in/ulugbek4real/" target="_blank">
              <FaLinkedin className="linkedin-icon text-2xl text-sky-700" />
            </a>
            <a href="https://twitter.com/ulugbek4real" target="_blank">
              <FaTwitterSquare className="twitter-icon text-2xl  text-sky-500" />
            </a>
          </div>
        </div>
      )}
      <div className=" text-sm h-full flex gap-8 text-stone-400 border-b  dark:border-neutral-700 border-gray-200 topbar-nav">
        <Link
          href="/"
          className={`${
            router.pathname == "/"
              ? "border-b border-black  dark:border-white text-black dark:text-white"
              : "text-stone-500  dark:text-neutral-500"
          } p-4 active:bg-stone-100 dark:active:bg-stone-700 `}
        >
          Blog
        </Link>
        {/* <Link
          className={`${
            router.pathname == "/projects"
              ? "border-b border-black  dark:border-white text-black  dark:text-white"
              : "text-stone-500 dark:text-neutral-500"
          } p-4  active:bg-stone-100 dark:active:bg-stone-700 `}
          href="/projects"
        >
          Projects
        </Link> */}
        <Link
          className={`${
            router.pathname == "/links"
              ? "border-b border-black  dark:border-white text-black  dark:text-white"
              : "text-stone-500 dark:text-neutral-500"
          } p-4  active:bg-stone-100 dark:active:bg-stone-700 `}
          href="/links"
        >
          My Links
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
