import React from "react";

const Guess = ({ word, guess, isGuessed }) => {
  return (
    <div className="flex gap-2 mb-2">
      {word.split("").map((_, i) => {
        const bgColor = !isGuessed
          ? "bg-white border border-neutral-300 dark:border-neutral-700 dark:bg-transparent"
          : word[i] === guess[i]
          ? "bg-green-500 text-white border border-green-500"
          : word.includes(guess[i])
          ? "bg-yellow-500 text-white border border-yellow-500"
          : "bg-neutral-500 text-white border border-neutral-500 dark:bg-neutral-800 dark:border-neutral-800";
        return (
          <div
            className={`${bgColor} h-12 w-12  2xl:h-16 2xl:w-16 uppercase font-bold flex items-center justify-center text-2xl 2xl:text-4xl`}
            key={i}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
};

export default Guess;
