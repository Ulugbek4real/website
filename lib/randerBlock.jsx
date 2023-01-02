import Link from "next/link";



export const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];
  
    switch (type) {
      case "paragraph":
        return (
          <p className="text-lg tracking-wide">
            <Text text={value.rich_text} />
          </p>
        );
      case "heading_1":
        return (
          <h1 className="text-3xl my-4 tracking-wide">
            <Text text={value.rich_text} />
          </h1>
        );
      case "heading_2":
        return (
          <h2 className="text-2xl font-bold my-3 tracking-wide">
            <Text text={value.rich_text} />
          </h2>
        );
      case "heading_3":
        return (
          <h3 className="text-xl font-bold mt-3 tracking-wide">
            <Text text={value.rich_text} />
          </h3>
        );
      case "bulleted_list_item":
      case "numbered_list_item":
        return (
          <li>
            <Text text={value.rich_text} />
            {!!value.children && renderNestedList(block)}
          </li>
        );
      case "to_do":
        return (
          <div>
            <label htmlFor={id}>
              <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
              <Text text={value.rich_text} />
            </label>
          </div>
        );
      case "toggle":
        return (
          <details>
            <summary className="text-lg my-2 ">
              <Text text={value.rich_text} />
            </summary>
            {value.children?.map((block) => (
              <div className="pl-4 text-md leading-none" key={block.id}>{renderBlock(block)}</div>
            ))}
          </details>
        );
      case "child_page":
        return <p>{value.title}</p>;
      case "image":
        const src =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption ? value.caption[0]?.plain_text : "";
        return (
          <figure className="my-8">
            <img src={src} alt={caption} />
            {caption && <figcaption className="text-gray-500">{caption}</figcaption>}
          </figure>
        );
        case "video":
        const videoSrc =
          value.type === "external" ? value.external.url : value.file.url;
          const Vcaption = value.caption ? value.caption[0]?.plain_text : "";
        return (
          <figure className="my-8"> 
          <iframe  className="max-w-2xl w-full  sm:h-96 h-52 " src={videoSrc} allowFullScreen></iframe>
          {Vcaption && <figcaption className="text-gray-500">{Vcaption}</figcaption>}
           </figure>
        );
        case "callout":
        const { icon, color, rich_text } = value;
        const calloutColor = color.split("_")[0];
        return (
          
          <div className={` p-2 my-4 rounded-sm flex gap-4  relative`}>
          <div style={{backgroundColor:calloutColor, opacity:"0.1"}} className="absolute w-full top-0 left-0 h-full"> </div>
                <span  className="opacity-100">{icon.emoji}</span>
                <span className="opacity-100">{rich_text[0]?.plain_text}</span>
         
          </div>
         
        );
      case "divider":
        return <hr className="my-8" key={id} />;
      case "quote":
        return <blockquote className="border-l-4 border-stone-600 pl-6 my-8 text-xl text-stone-500 italic" key={id}>{value.rich_text[0].plain_text}</blockquote>;
      case "code":
        return (
          <pre className=" bg-code-bg py-1 px-2  my-5 leading-loose overflow-auto rounded-md ">
            <code className="flex flex-wrap font-mono p-5 "  key={id}>
              {value.rich_text[0].plain_text}
            </code>
          </pre>
        );
      case "file":
        const src_file =
          value.type === "external" ? value.external.url : value.file.url;
        const splitSourceArray = src_file.split("/");
        const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
        const caption_file = value.caption ? value.caption[0]?.plain_text : "";
        return (
          <figure className="">
            <div className=" px-2 no-underline hover:bg-gray-100">
              📎{" "}
              <Link className="text-inherit " href={src_file} passHref>
                {lastElementInArray.split("?")[0]}
              </Link>
            </div>
            {caption_file && <figcaption>{caption_file}</figcaption>}
          </figure>
        );
      case "bookmark":
        const href = value.url;
        return (
          <a href={href} target="_brank" className="block mb-2">
            {href}
          </a>
        );
        // case "column_list":
        //   const { children } = value;
        //   return (
        //     <div>{children.map((childBlock)=>{
        //       console.log(childBlock)
        //       return renderBlock(childBlock)
        //     })}</div>
        //   );
       
      default:
        return `❌ Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  };

  export const Text = ({ text }) => {
    if (!text) {
      return null;
    }
    return text.map((value, i) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text,
      } = value;
      return (
        <span key={i}
      
          className=  {`${bold ? "font-bold" : ""} ${code ? "bg-code-bg font-mono text-sm  py-1 px-1.5 rounded-md" : ""} ${italic ? "italic" : ""} ${strikethrough ? "line-through" : ""} ${underline ? "underline" : ""}`}
          style={color !== "default" ? { color } : {}}
        >
          {text?.link ? <a href={text.link.url} target="_blank">{text.content}</a> : text?.content}
        </span>
      );
    });
  };

  
const renderNestedList = (block) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;
  
    const isNumberedList = value.children[0].type === "numbered_list_item";
  
    if (isNumberedList) {
      return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
    }
    return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
  };
  