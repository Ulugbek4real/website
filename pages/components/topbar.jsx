import Link from "next/link";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import myProfile from "../../public/myProf.jpg";

const Topbar = () => {
  const router = useRouter();
  const onPostPage = router.pathname.split("/")[1] == "posts";


  return (
    <div className={`${onPostPage ? "hidden " : ""}" flex flex-col gap-4 sm:gap-8 w-full pt-6 sm:pt-10 px-5 my-0 mx-auto max-w-3xl topbar"`}>
      <div className=" flex justify-between items-center topbar-header">
        <div className=" flex items-center gap-2  header-name">
        <Image src={myProfile} alt="profilePhoto" width={50} height={50} className="rounded-full lg:hidden"/>
        <h1 className=" text-2xl sm:text-3xl font-bold">Ulugbek Nurmatov</h1>
        </div>
        <BiDotsHorizontalRounded className=" text-2xl text-gray-500 nav-icon"/>
      </div>
      <div className="h-full flex gap-8 text-gray-400 border-b border-gray-200 topbar-nav">
        <Link href="/" className={`${router.pathname == "/" ? "border-b border-black text-black" :"text-gray-500"} p-4 active:bg-stone-100`}>Blog</Link>
        {/* <Link className={`${router.pathname == "/skills" ? "border-b border-black  text-black" :"text-gray-500"} p-4 active:bg-stone-100`} href="/skills">Skills</Link> */}
        <Link className={`${router.pathname == "/links" ? "border-b border-black  text-black" :"text-gray-500"} p-4  active:bg-stone-100`} href="/links">My Links</Link>
      </div>
    </div>
  )
}

export default Topbar