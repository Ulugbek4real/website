import Layout from '../components/layout'
import { FaGithub,FaLinkedin,FaTelegram,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
import { GiPunch } from 'react-icons/gi'
import Head from 'next/head'
import { getDatabase } from "../../lib/notion";
export const databaseId = process.env.NOTION_DATABASE_ID;
const Links = ({posts}) => {
  // console.log(posts);
  return (
    <Layout posts={posts}>
<Head>
      <title>Ulugbek's Links</title>
      <meta property="og:site_name" content="Ulugbek's website"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="I am Ulugbek Nurmatov, a 23-year-old Software Engineer from Uzbekistan, currently living in Seoul, South Korea." />
      <meta name="og:image" content="https://ulugbek4real.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmyProf.66dc75d2.jpg&w=2048&q=75" />
     <link  rel="icon" href="/logoPng.png" />
     <meta name="theme-color" content="#000000" />
</Head>
    <main className= 'mt-12 max-w-3xl w-full px-4 flex flex-col gap-4 my-0 mx-auto'>
      <a className='hover:border-link-border dark:hover:border-yellow-100 hover:bg-link-bg  w-full h-12  border text-black border-black dark:border-neutral-500  dark:hover:bg-link-bg-dark  rounded-3xl flex items-center px-4 justify-between' href="https://github.com/Ulugbek4real" target="_blank">
        <span className=" platform-name dark:text-neutral-100">GITHUB</span>
        <span className=" text-gray-500 text-xs middle-span">My open-source projects</span>
        <FaGithub className=" dark:text-neutral-100 text-2xl platform-icon"/>
      </a>
      <a className='dark:hover:border-yellow-100 dark:border-neutral-500  dark:hover:bg-link-bg-dark  hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.linkedin.com/in/ulugbek4real/" target="_blank">
        <span className="platform-name dark:text-neutral-100 ">LINKEDIN</span>
        <span className=" text-gray-500 text-xs middle-span">My professional profile</span>
    <FaLinkedin className=" dark:text-neutral-100 text-2xl platform-icon"/>
      </a>
      <a className='dark:hover:border-yellow-100 dark:border-neutral-500  dark:hover:bg-link-bg-dark hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.instagram.com/ulugbek4real/" target="_blank">
        <span className="platform-name dark:text-neutral-100 ">INSTAGRAM</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaInstagram className=" dark:text-neutral-100 text-2xl platform-icon" />
      </a>
      <a className='dark:hover:border-yellow-100 dark:border-neutral-500  dark:hover:bg-link-bg-dark hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://www.instagram.com/bjj_ground/" target="_blank">
        <span className="platform-name dark:text-neutral-100 ">JIU-JITSU</span>
        <span className=" text-gray-500 text-xs middle-span">Jiu-jitsu Ground</span>
        <GiPunch className=" dark:text-neutral-100 text-2xl platform-icon" />
      </a>
      <a  className='dark:hover:border-yellow-100 dark:border-neutral-500  dark:hover:bg-link-bg-dark hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://twitter.com/ulugbek4real" target="_blank">
        <span className="platform-name dark:text-neutral-100 ">TWITTER</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaTwitterSquare className=" dark:text-neutral-100 text-2xl platform-icon" />
      </a>
      <a  className='dark:hover:border-yellow-100 dark:border-neutral-500  dark:hover:bg-link-bg-dark hover:border-link-border hover:bg-link-bg w-full h-12  border text-black border-black rounded-3xl flex items-center px-4 justify-between' href="https://t.me/ulugbek4real" target="_blank">
        <span className="platform-name dark:text-neutral-100 ">TELEGRAM</span>
        <span className=" text-gray-500 text-xs middle-span">@ulugbek4real</span>
        <FaTelegram className=" dark:text-neutral-100 text-2xl platform-icon" />
        
      </a>
    </main>
    </Layout>
  )
}

export default Links


export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};