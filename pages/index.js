import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import {Text} from "../lib/randerBlock"
import Layout from "./components/layout";

export const databaseId = process.env.NOTION_DATABASE_ID;
export default function Home({ posts }) {

  return (
    <Layout>
      <Head>
        <title>Ulugbek Nurmatov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" max-w-3xl mt-12  mx-auto px-5">
        <ol className="">
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
          
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className="flex gap-12 border-b pb-8 mb-8">
              <div className=" flex-1 flex gap-1 flex-col">
              <p className="text-stone-500 text-xs sm:text-sm">{date}</p>
             
              <h3 className=" tracking-wide text-black text-lg sm:text-2xl font-semibold">
                  <Link className="text-gray-800 hover:text-violet-700" href={`/posts/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>
                <Link href={`/posts/${post.id}`} className="text-inherit"><p className=" tracking-wide hidden sm:inline  font-light">{post.properties.Description.rich_text[0].plain_text}</p> </Link>
               <div className="mt-0 sm:mt-5">
               {post.properties.Tags.multi_select.map((tag)=>{
                return <span className="bg-neutral-100 py-1 px-2 sm:px-3 mr-4 rounded-xl text-stone-500 text-xs sm:text-sm font-normal" key={tag.id} >{tag.name}</span>
              })}
              <span className="text-xs sm:text-sm text-stone-600">{post.properties.Duration.rich_text[0]?.plain_text}</span>
               </div>
              </div>
            <div className="flex justify-center items-center">
              <Link href={`/posts/${post.id}`}> <img className=" w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md" src={post.cover.external["url"]}></img></Link> 
            </div>

               
              </li>
            );
          })}
        </ol>
      </main>
    </Layout>
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
