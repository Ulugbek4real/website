import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useRef } from "react";
const Keyboard = ({ allGuesses, exactGuesses, inexactGuesses, handleKup }) => {
  const btnRef = useRef(null);
  const qwerty = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
  ];
  return (
    <div>
      {qwerty.map((row, i) => {
        return (
          <div className="flex gap-1 justify-center" key={i}>
            {row.map((key, j) => {
              const bgColor = exactGuesses().includes(key)
                ? "bg-green-500 text-white"
                : inexactGuesses().includes(key)
                ? "bg-yellow-500 text-white"
                : allGuesses().includes(key)
                ? "bg-neutral-500 text-white dark:bg-neutral-800"
                : "bg-neutral-200 dark:bg-neutral-500";

              return (
                <button
                  ref={btnRef}
                  onClick={() => {
                    handleKup({ key });
                    btnRef.current.blur();
                  }}
                  className={`${
                    key === "Enter"
                      ? "w-12 text-xs sm:w-16"
                      : key === "Backspace"
                      ? "w-12 text-xs sm:w-16"
                      : "w-8 sm:w-10"
                  } h-14  mb-1 flex items-center justify-center rounded-md uppercase text-sm font-bold ${bgColor}`}
                  key={j}
                >
                  {key === "Backspace" ? (
                    <RiDeleteBack2Line className=" text-2xl" />
                  ) : (
                    key
                  )}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
