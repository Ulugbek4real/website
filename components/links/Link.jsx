import React from "react";

const Link = ({ name, url, icon, text }) => {
  return (
    <a
      className="hover:border-link-border dark:hover:border-yellow-100 hover:bg-link-bg  w-full h-12  border text-black border-black dark:border-neutral-500  dark:hover:bg-link-bg-dark  rounded-3xl flex items-center px-4 justify-between"
      href={url}
      target="_blank"
    >
      <span className=" platform-name dark:text-neutral-100">{name}</span>
      <span className=" text-gray-500 text-xs middle-span">{text}</span>
      {icon}
    </a>
  );
};

export default Link;
