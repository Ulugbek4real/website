import myProf from "../../public/myProf.jpg";
import {RiCommandFill} from "react-icons/ri";
import { FaGithub,FaLinkedin,FaTelegram,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
import Image from "next/image";
import {BsFillPinFill} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import { getDatabase } from "../../lib/notion";
export const databaseId = process.env.NOTION_DATABASE_ID;


export default function Sidedesk ({posts}){
// console.log(posts)
  return (
    <div className='hidden w-80 xl:w-96 sticky  h-full  border-l border-stone-200  dark:border-neutral-700 lg:flex flex-col top-0 right-0'>
      <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
        <a href = "mailto: ulugbek4real.w@gmail.com" className="box-contact h-9 flex justify-center items-center text-sm font-light hover:bg-violet-900 dark:bg-neutral-300 dark:text-black dark:hover:bg-dark-yellow text-white rounded-3xl px-4  bg-black">Contact Me</a>
        <a href="https://t.me/ulugbekChannel" target="_blank" className="cursor-pointer box-search h-9 border-stone-200 border rounded-3xl hover:bg-link-bg hover:border-link-border dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 text-neutral-700 dark:text-white flex justify-between px-4 items-center "><span className=" font-light text-sm">Community</span>
      <TbBrandTelegram className="text-lg text-neutral-600  dark:text-white"/></a>
        {/* <div className="cursor-pointer box-search h-9 border-stone-200 border rounded-3xl hover:bg-link-bg hover:border-link-border dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 flex justify-between px-4 items-center ">
        <span>Newsletter</span>
      <TbBrandTelegram />
        </div> */}
      </div>
      <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
        <div className="box-profile flex gap-2 ">
            <Image className=" w-16 h-16 object-cover rounded-full" src={myProf} alt="Ulugbek Nurmatov profile image" />
          <div className="box-profile-info flex flex-col justify-center ml-3">
            <span className="box-profile-info-name font-semibold">Ulugbek Nurmatov</span>
            <span className="box-profile-info-status text-sm text-stone-500 dark:text-neutral-400">Software Engineer</span>
          </div>
        </div>
        <div className="box-information">
        <p className="box-text text-sm text-stone-500 dark:text-neutral-400">
        I'm a full-stack Software Engineer based in Seoul, South Korea. Here you'll find my personal blog posts and case studies.
        </p>
        </div>
      </div>
      {/* <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
      <span className="">Pinned stories</span>
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
           <div className="flex items-center gap-1"> <BsFillPinFill className="text-sm text-stone-500" /> <span className="text-sm text-stone-500"> Pinned • {posts[0].properties.Duration.rich_text[0].plain_text}</span></div>
             <span className="text-md font-bold capitalize">{posts[0].properties.Name.title[0].plain_text}</span>
        </div>
             <img className=" w-14 h-14 object-cover " src={posts[0].cover.external.url} alt="post"></img>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
        <div className="flex items-center gap-1"> <BsFillPinFill className="text-sm text-stone-500" /> <span className="text-sm text-stone-500"> Pinned • {posts[1].properties.Duration.rich_text[0].plain_text}</span></div>
             <span className="text-md font-bold capitalize">{posts[1].properties.Name.title[0].plain_text}</span>
        </div>
             <img className=" w-14 h-14 object-cover " src={posts[1].cover.external.url} alt="post"></img>
      </div>
      </div> */}
      <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
      <span className="">Social Media</span>

        <div className="social-media flex justify-between items-center">
          <div className="social-right flex items-center gap-6">
          <FaGithub className="github-icon text-2xl" />
          <div className="media-box flex flex-col gap-0">
            <span>GitHub</span>
            <span className="followers text-xs font-medium text-stone-400">15 followers</span>
          </div>
          </div>
          <a className="media-link rounded-3xl text-xs border dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://github.com/Ulugbek4real" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaLinkedin className="linkedin-icon text-2xl text-sky-700" />
          <div className="media-box flex flex-col gap-0">
            <span>LinkedIn</span>
            <span className="followers text-xs font-medium text-stone-400">10 followers</span>
          </div>
          </div>
          <a className="dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://www.linkedin.com/in/ulugbek4real/" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaInstagram className="instagram-icon text-2xl text-pink-600" />
          <div className="media-box flex flex-col gap-0">
            <span>Instagram</span>
            <span className="followers text-xs font-medium text-stone-400">100 followers</span>
          </div>
          </div>
          <a className="dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://www.instagram.com/ulugbek4real/" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaTwitterSquare className="twitter-icon text-2xl  text-sky-500" />
          <div className="media-box flex flex-col gap-0">
            <span>Twitter</span>
            <span className="followers text-xs font-medium text-stone-400">12 followers</span>
          </div>
          </div>
          <a className="dark:border-neutral-600 dark:hover:bg-link-bg-dark dark:hover:border-yellow-100 media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://twitter.com/ulugbek4real" target="_blank">Follow</a>
        </div>
       
      </div>
      
    </div>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};

// export default Sidedesk



// export const getStaticProps = async () => {
//     const database = await getDatabase(databaseId);
//     return {
//       props: {
//         posts: database,
//       },
//       revalidate: 1,
//     };
//   };