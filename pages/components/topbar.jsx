import Link from "next/link";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {HiLink} from "react-icons/hi"
import Image from "next/image";
import { useRouter } from "next/router";
import myProfile from "../../public/myProf.jpg";

const Topbar = () => {
  const router = useRouter();
  const onPostPage = router.pathname.split("/")[1] == "posts";
  const onLinksPage = router.pathname.split("/")[1] == "links";


  return (
    <div className={`${onPostPage ? "hidden " : ""}" flex flex-col gap-4 sm:gap-8 w-full pt-6 sm:pt-10 px-5 my-0 mx-auto max-w-3xl topbar"`}>
      <div className=" flex justify-between items-center topbar-header">
        <div className=" flex items-center gap-2  header-name">
        {onLinksPage ? <HiLink className="bg-neutral-200 hover:bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:transition-all  h-7 w-7 rounded-full p-1 "/>:  <Image src={myProfile} alt="Ulugbek Nurmatov profile image"  className=" w-12 h-12 object-cover rounded-full lg:hidden"/>}
        <h1 className=" text-2xl sm:text-3xl font-bold">{onLinksPage ? "Ulugbek's Links" : "Ulugbek Nurmatov"}</h1>
        </div>
        <BiDotsHorizontalRounded className=" text-2xl text-gray-500 nav-icon"/>
      </div>
      <div className=" text-sm h-full flex gap-8 text-stone-400 border-b  dark:border-neutral-700 border-gray-200 topbar-nav">
        <Link href="/" className={`${router.pathname == "/" ? "border-b border-black  dark:border-white text-black dark:text-white" :"text-stone-500  dark:text-neutral-500"} p-4 active:bg-stone-100 dark:active:bg-stone-700 `}>Blog</Link>
        {/* <Link className={`${router.pathname == "/skills" ? "border-b border-black  text-black" :"text-gray-500"} p-4 active:bg-stone-100`} href="/skills">Skills</Link> */}
        <Link className={`${router.pathname == "/links" ? "border-b border-black  dark:border-white text-black  dark:text-white" :"text-stone-500 dark:text-neutral-500"} p-4  active:bg-stone-100 dark:active:bg-stone-700 `} href="/links">My Links</Link>
      </div>
    </div>
  )
}

export default Topbar