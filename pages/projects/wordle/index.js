import Guess from "../../../components/projects/wordle/Guess";
import Keyboard from "../../../components/projects/wordle/Keyboard";
import Modal from "../../../components/projects/wordle/Modal";
import words from "../../../components/projects/wordle/words";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MdOutlineAutorenew } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { useReducer } from "react";
import { Reducer } from "../../../components/projects/wordle/Reducer";

const INITIAL_STATE = {
  word: "",
  guesses: ["", "", "", "", "", ""],
  currentGuess: 0,
  won: false,
  lost: false,
};

export default function index() {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [showModal, setShowModal] = useState(true);
  const [stats, setStats] = useState({
    played: 0,
    win: 0,
    currentStreak: 0,
    maxStreak: 0,
  });

  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem("stats"));
    if (stats) {
      setStats(stats);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const buttonRef = useRef(null);

  const init = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    dispatch({ type: "INIT", payload: word });
  };

  const handleClick = (e) => {
    if (state.currentGuess === 6 || state.won || state.lost) return;
    const { key } = e;
    if (
      key === "Enter" &&
      state.currentGuess < 6 &&
      words.includes(state.guesses[state.currentGuess])
    ) {
      dispatch({ type: "ENTER" });
    }
    if (key === "Backspace") {
      dispatch({ type: "BACKSPACE" });
    }
    if (key.match(/^[A-z]$/) && state.guesses[state.currentGuess].length < 5) {
      dispatch({ type: "KEY", payload: key });
    }
  };

  const allGuesses = () => {
    return state.guesses.slice(0, state.currentGuess).join("").split("");
  };
  const exactGuesses = () => {
    return state.word.split("").filter((letter, i) => {
      return state.guesses
        .slice(0, state.currentGuess)
        .map((word) => word[i])
        .includes(letter);
    });
  };
  const inexactGuesses = () => {
    return state.word
      .split("")
      .filter((letter) => allGuesses().includes(letter));
  };

  const updateStats = () => {
    if (state.won || state.lost) {
      setStats((prev) => {
        return {
          ...prev,
          played: prev.played + 1,
          win: prev.win + (state.won ? 1 : 0),
          currentStreak: state.won ? prev.currentStreak + 1 : 0,
          maxStreak: Math.max(
            prev.maxStreak,
            prev.currentStreak + (state.won ? 1 : 0)
          ),
        };
      });
    }
  };

  useEffect(() => {
    init();
  }, []);
  useEffect(() => {
    updateStats();
    window.addEventListener("keyup", handleClick);
    return () => {
      window.removeEventListener("keyup", handleClick);
    };
  }, [state.guesses, state.currentGuess]);
  return (
    <div className=" h-screen  flex flex-col justify-center gap-8 items-center">
      <div className=" flex gap-1 absolute top-1 right-2 z-50">
        <button
          ref={buttonRef}
          onClick={() => {
            init();
            buttonRef.current.blur();
          }}
          className=" p-1 border text-sm border-neutral-400 rounded-md text-inherit "
        >
          <MdOutlineAutorenew />
        </button>
        <Link
          className=" p-1 border text-sm border-neutral-400 rounded-md text-inherit "
          href="/projects"
        >
          <ImExit />
        </Link>
        {(state.won || state.lost) && (
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
            className=" px-2 border text-sm border-neutral-400 rounded-md text-inherit "
          >
            ?
          </button>
        )}
      </div>
      <h1 className="text-3xl mt-10 sm:mt-0">Wordle anytime!</h1>
      <div>
        {new Array(6).fill(0).map((_, i) => {
          return (
            <Guess
              word={state.word}
              guess={state.guesses[i]}
              isGuessed={i < state.currentGuess}
              key={i}
            />
          );
        })}
      </div>

      <h1 className="hidden"> {state.word}</h1>
      {(state.won || state.lost) && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          currentGuess={state.currentGuess}
          word={state.word}
          init={init}
          youWon={state.won}
          youLost={state.lost}
          stats={stats}
        />
      )}
      <Keyboard
        allGuesses={allGuesses}
        inexactGuesses={inexactGuesses}
        exactGuesses={exactGuesses}
        handleKup={handleClick}
      />
    </div>
  );
}
