import myProf from "../../public/myProf.jpg";
import {RiCommandFill} from "react-icons/ri";
import { FaGithub,FaLinkedin,FaTelegram,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
import Image from "next/image";


export default function Sidedesk (){


  return (
    <div className='hidden w-80 xl:w-96 sticky  h-full  border-l border-stone-200 lg:flex flex-col top-0 right-0'>
      <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
        <a href = "mailto: ulugbek4real.w@gmail.com" className="box-contact h-9 flex justify-center items-center text-sm font-light hover:bg-violet-900 text-white rounded-3xl px-4  bg-black">Contact Me</a>
        <div className="box-search h-9 border-stone-200 border rounded-3xl hover:bg-link-bg hover:border-link-border flex justify-between px-4 items-center ">
          <input className=" bg-transparent outline-none placeholder:text-stone-600 placeholder:text-sm" type="text" placeholder="Search" />
          <div className="search-shortcut flex items-center text-stone-600">
      <RiCommandFill /> K
          </div>
        </div>
      </div>
      <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
        <div className="box-profile flex gap-2 ">
            <Image className=" w-16 h-16 rounded-full" src={myProf} alt="profilePic" />
          <div className="box-profile-info flex flex-col justify-center ml-3">
            <span className="box-profile-info-name font-semibold">Ulugbek Nurmatov</span>
            <span className="box-profile-info-status text-sm text-stone-500">Software Engineer</span>
          </div>
        </div>
        <div className="box-information">
        <p className="box-text text-sm text-stone-500">
        I'm a full-stack Software Engineer based in Seoul, South Korea. Here you'll find my personal blog posts and case studies.
        </p>
        </div>
      </div>
      {/* <div className="w-4/5 mt-10 mx-auto mb-4 flex flex-col gap-4">
      <span className="">More stories</span>
      <div>
        <div>

        </div>
        <img src="" alt="post"></img>
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
          <a className="media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://github.com/Ulugbek4real" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaLinkedin className="linkedin-icon text-2xl text-sky-700" />
          <div className="media-box flex flex-col gap-0">
            <span>LinkedIn</span>
            <span className="followers text-xs font-medium text-stone-400">10 followers</span>
          </div>
          </div>
          <a className="media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://www.linkedin.com/in/ulugbek4real/" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaInstagram className="instagram-icon text-2xl text-pink-600" />
          <div className="media-box flex flex-col gap-0">
            <span>Instagram</span>
            <span className="followers text-xs font-medium text-stone-400">100 followers</span>
          </div>
          </div>
          <a className="media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://www.instagram.com/ulugbek4real/" target="_blank">Follow</a>
        </div>
        <div className="social-media flex justify-between items-center">
        <div className="social-right flex items-center gap-6">
          <FaTwitterSquare className="twitter-icon text-2xl  text-sky-500" />
          <div className="media-box flex flex-col gap-0">
            <span>Twitter</span>
            <span className="followers text-xs font-medium text-stone-400">12 followers</span>
          </div>
          </div>
          <a className="media-link rounded-3xl text-xs border py-2 px-4 hover:bg-link-bg hover:border-link-border text-inherit" href="https://twitter.com/ulugbek4real" target="_blank">Follow</a>
        </div>
       
      </div>
      
    </div>
  )
}

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