import React from "react";
import Link from "next/link";
import { Text } from "../../lib/randerBlock";
import { getDate } from "../utils/utils";
const Post = ({ post }) => {
  const src =
    post.cover.type === "external"
      ? post.cover.external.url
      : post.cover.file.url;
  const caption = post.cover.caption ? post.cover.caption[0]?.plain_text : "";
  const date = getDate(post.last_edited_time);
  return (
    <>
      <li className="flex gap-12 border-b  dark:border-neutral-700  pb-8 mb-8">
        <div className=" flex-1 flex gap-1 flex-col">
          <p className="text-stone-500 dark:text-neutral-400 text-xs sm:text-sm">
            {date}
          </p>

          <h3 className=" text-black text-base sm:text-2xl font-semibold">
            <Link
              className=" text-gray-800 dark:text-neutral-100 dark:hover:text-amber-100 hover:text-violet-700"
              href={`/posts/${post.id}`}
            >
              <Text text={post.properties.Name.title} />
            </Link>
          </h3>
          <Link
            href={`/posts/${post.id}`}
            className="text-inherit dark:text-neutral-300"
          >
            <p className=" sm:tracking-wider tracking-normal text-sm sm:text-base text-ellipsis break-words overflow-hidden max-h-6 sm:max-h-12  leading-6 font-light">
              {post.properties.Description.rich_text[0].plain_text}
            </p>{" "}
          </Link>
          <div className="mt-0 sm:mt-5">
            {post.properties.Tags.multi_select.map((tag) => {
              return (
                <span
                  className="bg-neutral-100 dark:bg-neutral-800 py-1 px-2 sm:px-3 mr-4 rounded-xl text-stone-500 text-xs sm:text-sm font-normal"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              );
            })}
            <span className="text-xs sm:text-sm text-stone-600 dark:text-neutral-400">
              {post.properties.Duration.rich_text[0]?.plain_text}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href={`/posts/${post.id}`}>
            {" "}
            <img
              className=" w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
              src={src}
              alt={caption}
            />
          </Link>
        </div>
      </li>
    </>
  );
};

export default Post;
