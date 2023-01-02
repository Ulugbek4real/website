import myProf from "../../public/myProf.jpg";
import myLogo from  "../../public/my-logo.jpg";
import {MdAlternateEmail} from "react-icons/md";
import {HiOutlineMoon} from "react-icons/hi";
import {IoMdHome} from "react-icons/io";
import {MdOutlineHome} from "react-icons/md";
import {HiSearch} from "react-icons/hi";
import  Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Sidebar = () => {
const router = useRouter();
//   const handleClick  = () => {
// document.querySelector(".blur-background").classList.remove("hidden");
// document.querySelector(".contact-main").classList.add("appear");
// // disableBodyScroll(document);
//   }
 
  return (
    <div className=" w-full bg-white lg:w-20 lg:border-r border-gray-200 lg:py-10 box-border lg:flex flex-row z-10  lg:flex-col justify-between items-center h-16 lg:h-screen fixed lg:sticky bottom-0 lg:top-0 left-0">
      <Link className="hidden lg:inline" href="/">
          <Image className="  w-8 h-8 rounded-full" src={myLogo} alt="myLogo" />
        </Link>
        <div className=" w-full lg:w-auto max-w-2xl mx-auto my-0 h-full lg:h-auto items-center flex-row justify-around flex lg:flex-col gap-6">
          <Link className=" w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 active:bg-stone-200 rounded-full text-stone-500 text-inherit" href="/">{router.pathname === "/" ? <IoMdHome className="text-black"/> : <MdOutlineHome />}
         
          </Link>
          <div className=" w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 active:bg-stone-200 rounded-full text-stone-500 "><HiSearch /></div>
          <div className=" w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 active:bg-stone-200 rounded-full text-stone-500 "><MdAlternateEmail /></div>
          <div className=" w-10 h-10 flex justify-center items-center text-2xl hover:bg-stone-100 active:bg-stone-200 rounded-full text-stone-500 "><HiOutlineMoon /></div>
         
        </div>
        <div className="hidden lg:inline">
        <Image className="w-8 h-8 rounded-full" src={myProf} alt="profilePic" />
        </div>
    </div>
  )
}

export default Sidebar