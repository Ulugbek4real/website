import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
import { databaseId } from "../index.js";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import Image from "next/image";
import myProfile from "../../public/myProf.jpg"
import { renderBlock, Text } from "../../lib/randerBlock";
import Layout from "../components/layout";


export default function Post({ page, blocks }) {
  const src =
  page.cover.type === "external" ?  page.cover.external.url :  page.cover.file.url;
// const caption =  page.cover.caption ?  page.cover.caption[0]?.plain_text : "";
  console.log(page);
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <>
    <Layout >
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <meta name="author" content="Ulugbek Nurmatov" />
        <meta property="og:site_name" content="Ulugbek Nurmatov"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="description" content={page.properties.Description.rich_text[0].plain_text} />
        <meta property="og:image" content={src} />
        
        <link  rel="icon" href="/logoPng.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <header className=" max-w-3xl mx-auto px-5 tracking-wide mt-12">
      <div className=" flex justify-between items-center topbar-header">
        <div className=" flex items-center gap-4  header-name">
        <Image src={myProfile} alt="profilePhoto" className="w-12 h-12 object-cover rounded-full"/>
        <div  className="flex flex-col">
        <span className=" text-md font-semibold">Ulugbek Nurmatov</span>
        <div className="text-sm font-normal text-stone-500">
          <span>{
            new Date(page.last_edited_time).toLocaleString( 
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            )
          }</span>
          <span  className="hidden sm:inline"> • {page.properties.Duration.rich_text[0].plain_text}</span>
        </div>
        </div>
        </div>
        <BiDotsHorizontalRounded className=" text-2xl text-gray-500 nav-icon"/>
      </div>
      </header>

      <article className="leading-normal max-w-3xl mt-8 px-5 mx-auto">
        <h1 className="text-4xl font-bold tracking-wide mb-2">
          <Text text={page.properties.Name.title} />
        </h1>
        <p className=" text-neutral-500 tracking-wider text-xl">{page.properties.Description.rich_text[0].plain_text}</p>
        <section>
          {blocks.map((block) => (
            <div className="" key={block.id}>{renderBlock(block)}</div>
          ))}
          {/* <Link href="/" className=" inline-block mb-5">
            ← Go home
          </Link> */}
        </section>
      </article>
      </Layout>
      </>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
