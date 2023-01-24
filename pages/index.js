import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import {Text} from "../lib/randerBlock"
import Layout from "./components/layout";

export const databaseId = process.env.NOTION_DATABASE_ID;
export default function Home({ posts }) {
  return (
    <>
      {/* <Contact /> */}
    <Layout posts ={posts}>
      <Head>
      <title>Ulugbek Nurmatov</title>
      <meta name="author" content="Ulugbek Nurmatov" />
      <meta property="og:site_name" content="Ulugbek's personal website"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
     
      <meta name="description" content="I am Ulugbek Nurmatov, a 23-year-old Software Engineer from Uzbekistan, currently living in Seoul, South Korea." />
      <meta name="og:image" content="https://ulugbek4real.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmyProf.66dc75d2.jpg&w=2048&q=75" />
      
     <link  rel="icon" href="/logoPng.png" />
     <meta name="theme-color" content="#000000" />
      </Head>

      <main className="  max-w-3xl mt-12  mx-auto px-5">
        <ol className="">
          {posts.map((post) => {
            const src =
              post.cover.type === "external" ?  post.cover.external.url :  post.cover.file.url;
           const caption =  post.cover.caption ?  post.cover.caption[0]?.plain_text : "";
            const date = new Date(post.last_edited_time).toLocaleString(
          
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className="flex gap-12 border-b  dark:border-neutral-700  pb-8 mb-8">
              <div className=" flex-1 flex gap-1 flex-col">
              <p className="text-stone-500 dark:text-neutral-400 text-xs sm:text-sm">{date}</p>
             
              <h3 className=" tracking-wide text-black text-lg sm:text-2xl font-semibold">
                  <Link className="text-gray-800 dark:text-neutral-100 dark:hover:text-amber-100 hover:text-violet-700" href={`/posts/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>
                <Link href={`/posts/${post.id}`} className="text-inherit dark:text-neutral-300"><p className=" tracking-wide hidden sm:inline  font-light">{post.properties.Description.rich_text[0].plain_text}</p> </Link>
               <div className="mt-0 sm:mt-5">
               {post.properties.Tags.multi_select.map((tag)=>{
                return <span className="bg-neutral-100 dark:bg-neutral-800 py-1 px-2 sm:px-3 mr-4 rounded-xl text-stone-500 text-xs sm:text-sm font-normal" key={tag.id} >{tag.name}</span>
              })}
              <span className="text-xs sm:text-sm text-stone-600 dark:text-neutral-400">{post.properties.Duration.rich_text[0]?.plain_text}</span>
               </div>
              </div>
            <div className="flex justify-center items-center">
              <Link href={`/posts/${post.id}`}> <img className=" w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md" src={src} alt={caption} /></Link> 
            </div>

               
              </li>
            );
          })}
        </ol>
      </main>
    </Layout>
  
    </>
  );
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
const getPostDescription = async () => {
  const database = await getDatabase(databaseId);
  return {
    
      posts: database.description,
    }
   

}
