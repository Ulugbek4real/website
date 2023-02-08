import myProf from "../../public/myProf.jpg";
import myLogo from "../../public/my-logo.png";
import myLogoDark from "../../public/logo-dark.png";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Contact from "../contact/Contact";

const Sidebar = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isContactHidden, setIsContactHidden] = useState(true);
  useEffect(() => setMounted(true), [systemTheme]);
  const changeTheme = (el) => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return el === "icon" ? (
        <div
          onClick={() => setTheme("light")}
          className=" cursor-pointer w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500 dark:text-neutral-100 "
        >
          {" "}
          <HiOutlineSun />
        </div>
      ) : (
        <Image className="w-8 h-8 rounded-full" src={myLogo} alt="myLogo" />
      );
    } else {
      return el === "icon" ? (
        <div
          onClick={() => setTheme("dark")}
          className="cursor-pointer w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500 dark:text-neutral-100 "
        >
          {" "}
          <HiOutlineMoon />
        </div>
      ) : (
        <Image
          className="  w-8 h-8 rounded-full"
          src={myLogoDark}
          alt="myLogo"
        />
      );
    }
  };

  useEffect(() => {
    if (!isContactHidden) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
  }, [isContactHidden]);

  const router = useRouter();
  // console.log(router.pathname)
  const handleClick = () => {
    setIsContactHidden(!isContactHidden);
    // disableBodyScroll(document);
  };

  return (
    <>
      <div className=" w-full bg-white lg:dark:bg-transparent dark:bg-dark3 lg:w-20 lg:border-r border-gray-200 dark:border-neutral-700 lg:py-10 box-border lg:flex flex-row z-10  lg:flex-col justify-between items-center h-16 lg:h-screen fixed lg:sticky bottom-0 lg:top-0 left-0">
        <Link
          className="hidden lg:inline  lg:hover:bg-stone-100 dark:hover:bg-neutral-800 lg:active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500  dark:text-neutral-100"
          href="/"
        >
          {changeTheme()}
        </Link>
        <div className=" w-full lg:w-auto max-w-2xl mx-auto my-0 h-full lg:h-auto items-center flex-row justify-around flex lg:flex-col gap-4">
          <Link
            className=" w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-black dark:text-neutral-100"
            href="/"
          >
            {router.pathname === "/" ? (
              <IoMdHome className="text-black dark:text-neutral-100" />
            ) : (
              <MdOutlineHome />
            )}
          </Link>
          <a
            href="https://t.me/ulugbekChannel"
            target="_blank"
            className=" cursor-pointer w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500  dark:text-neutral-100"
          >
            <TbBrandTelegram />
          </a>
          <div
            onClick={handleClick}
            className=" cursor-pointer w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 dark:hover:bg-neutral-800 active:bg-stone-200 dark:active:bg-neutral-600 rounded-full text-stone-500 dark:text-neutral-100 "
          >
            <MdAlternateEmail />
          </div>
          {changeTheme("icon")}
        </div>
        <div className="hidden lg:inline">
          <Image
            className="w-8 h-8 object-cover rounded-full"
            src={myProf}
            alt="Ulugbek Nurmatov' profile photo"
          />
        </div>
      </div>
      <Contact
        isContactHidden={isContactHidden}
        setIsContactHidden={setIsContactHidden}
        // enableBodyScroll ={enableBodyScroll}
      />
    </>
  );
};

export default Sidebar;
