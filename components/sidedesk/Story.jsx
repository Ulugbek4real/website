import React from "react";
import Link from "next/link";
import { getDate } from "../utils/utils";

const Story = ({ post }) => {
  const date = getDate(post.last_edited_time);
  return (
    <div key={post.id} className="flex gap-4">
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex items-center gap-1">
          {" "}
          <span className="text-sm text-stone-500">
            {" "}
            {date} • {post.properties.Duration.rich_text[0].plain_text}
          </span>
        </div>
        <Link
          className="text-gray-800 dark:text-neutral-100 dark:hover:text-amber-100 hover:text-violet-700  text-ellipsis break-words overflow-hidden max-h-10 leading-5 text-inherit"
          href={`/posts/${post.id}`}
        >
          <span className="tracking-wide text-md font-bold capitalize ">
            {post.properties.Name.title[0].plain_text}
          </span>
        </Link>
      </div>
      <Link href={`/posts/${post.id}`}>
        <img
          className=" w-14 h-14 object-cover "
          src={post.cover.external.url}
          alt="post"
        ></img>
      </Link>
    </div>
  );
};

export default Story;
