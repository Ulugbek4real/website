import React from "react";
import { FaCarAlt, FaAsterisk } from "react-icons/fa";

const Node = ({
  className,
  col,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
}) => {
  return (
    <div
      id={`node-${row}-${col}`}
      className={` ${
        isWall ? "node-wall bg-sky-900 dark:bg-green-800" : " "
      } ${className}  h-6 w-6 outline outline-[0.25px] outline-cyan-200 dark:outline-neutral-700 dark:text-neutral-300 flex justify-center items-center cursor-pointer text-xl`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {isStart ? <FaCarAlt /> : isFinish ? <FaAsterisk /> : ""}
    </div>
  );
};

export default Node;
