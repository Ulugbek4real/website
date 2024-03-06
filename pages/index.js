import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "../lib/randerBlock";
import Layout from "../components/layout/Layout";
import Post from "../components/post/Post";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      {/* <Contact /> */}
      <Layout>
        <Head>
          <title>Ulugbek Nurmatov</title>
          <meta property="og:site_name" content="Ulugbek's website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="I am Ulugbek Nurmatov, a 23-year-old Software Engineer from Uzbekistan, currently living in Seoul, South Korea."
          />
          <meta
            name="og:image"
            content="https://ulugbek4real.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmyProf.66dc75d2.jpg&w=2048&q=75"
          />

          <link rel="icon" href="/logoPng.png" />
          <meta name="theme-color" content="#000000" />
        </Head>

        <main className="  max-w-3xl mt-12  mx-auto px-5">
          <ol className="">
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </ol>
        </main>
      </Layout>
    </div>
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
  };
};
