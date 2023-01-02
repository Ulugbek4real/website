import Layout from '../components/layout'
import { FaGithub,FaLinkedin,FaTelegram,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
import { GiPunch } from 'react-icons/gi'
import Head from 'next/head'
const Links = () => {
  return (
    <Layout>
<Head>
        <title>My Links</title>
        <meta name="description" content="My links" />
</Head>
    <main className= 'mt-12 max-w-3xl w-full px-4 flex flex-col gap-4 my-0 mx-auto'>
      <a className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://github.com/Ulugbek4real" target="_blank">
        <span className=" platform-name">GITHUB</span>
        <span className=" text-gray-500 text-xs middle-span">My open-source projects</span>
        <FaGithub className=" text-2xl platform-icon"/>
      </a>
      <a className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.linkedin.com/in/ulugbek4real/" target="_blank">
        <span className="platform-name">LINKEDIN</span>
        <span className=" text-gray-500 text-xs middle-span">My professional profile</span>
    <FaLinkedin className="text-2xl platform-icon"/>
      </a>
      <a className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.instagram.com/ulugbek4real/" target="_blank">
        <span className="platform-name">INSTAGRAM</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaInstagram className="text-2xl platform-icon" />
      </a>
      <a className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.instagram.com/bjj_ground/" target="_blank">
        <span className="platform-name">JIU-JITSU</span>
        <span className=" text-gray-500 text-xs middle-span">Jiu-jitsu Ground</span>
        <GiPunch className="text-2xl platform-icon" />
      </a>
      <a  className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://twitter.com/ulugbek4real" target="_blank">
        <span className="platform-name">TWITTER</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaTwitterSquare className="text-2xl platform-icon" />
      </a>
      <a  className='hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://t.me/ulugbek4real" target="_blank">
        <span className="platform-name">TELEGRAM</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaTelegram className="text-2xl platform-icon" />
        
      </a>
    </main>
    </Layout>
  )
}

export default Links
