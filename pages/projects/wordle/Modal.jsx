import Link from "next/link";
import React, { useState } from "react";

const Modal = ({
  word,
  youWon,
  youLost,
  init,
  showModal,
  setShowModal,
  currentGuess,
  stats,
}) => {
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className={` ${
          showModal ? "backdrop-blur-sm bg-black/50" : "bg-transparent"
        }  fixed top-0 left-0 w-full h-full  `}
      ></div>

      <div
        className={`${
          showModal ? "" : "hidden "
        } sm:w-96 w-80 flex flex-col gap-4 border p-4 absolute z-10 bg-white rounded-md`}
      >
        <div className="flex flex-col items-center dark:text-black">
          <h2 className="uppercase font-bold text-sm mb-4">Statistics</h2>
          <div className="flex gap-4 ">
            <div className="flex flex-col items-center">
              <span className="text-3xl">{stats?.played}</span>
              <span className="text-xs text-center w-12">played</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">
                {Math.round((stats?.win / stats?.played) * 100) || 0}
              </span>
              <span className="text-xs text-center w-12">win %</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">{stats?.currentStreak}</span>
              <span className="text-xs text-center w-12">current streak</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">{stats?.maxStreak}</span>
              <span className="text-xs text-center w-12">max streak</span>
            </div>
          </div>
        </div>
        {youWon() ? (
          <div className="bg-green-500 text-center rounded-md text-white py-2">
            <h2 className="uppercase font-bold text-sm  ">
              {" "}
              🎉🎉🎉congrats🎉🎉🎉
            </h2>
            <p className="text-xs">
              You guessed the word <span className="font-bold">{word}</span> in{" "}
              {currentGuess} guesses
            </p>
          </div>
        ) : youLost() ? (
          <div className="bg-red-900 text-center rounded-md text-white py-2">
            <h2 className="uppercase font-bold text-sm ">
              You can always try again{" "}
            </h2>
            <p className="text-xs">
              The word is <span className="font-bold">{word}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        <button
          className="bg-neutral-200 dark:bg-neutral-500 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md px-4 py-2 font-bold uppercase text-sm"
          onClick={init}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default Modal;
