import Guess from "./Guess";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import { useEffect, useState, useRef } from "react";
import words from "./words.json";
import Link from "next/link";
import { MdOutlineAutorenew } from "react-icons/md";
import { ImExit } from "react-icons/im";

export default function index() {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(0);
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
    setWord(word);
    setGuesses(new Array(6).fill(""));
    setCurrentGuess(0);
    setShowModal(true);
  };

  const youWon = () => {
    return word === guesses[currentGuess - 1];
  };
  const youLost = () => {
    return currentGuess >= 6;
  };

  const handleKup = (e) => {
    if (youWon() || youLost()) return;

    if (currentGuess >= 6) return;
    const { key } = e;
    if (key === "Backspace") {
      setGuesses((prev) => {
        const newGuesses = [...prev];
        newGuesses[currentGuess] = newGuesses[currentGuess].slice(0, -1);
        return newGuesses;
      });
    }
    if (key === "Enter" && words.includes(guesses[currentGuess])) {
      setCurrentGuess((prev) => prev + 1);
    }
    if (key.match(/^[A-z]$/) && guesses[currentGuess].length < word.length) {
      setGuesses((prev) => {
        const newGuesses = [...prev];
        newGuesses[currentGuess] += key;
        return newGuesses;
      });
    }
  };

  const allGuesses = () => {
    return guesses.slice(0, currentGuess).join("").split("");
  };
  const exactGuesses = () => {
    return word.split("").filter((letter, i) => {
      return guesses
        .slice(0, currentGuess)
        .map((word) => word[i])
        .includes(letter);
    });
  };
  const inexactGuesses = () => {
    return word
      .split("")
      .filter((letter) => allGuesses().includes(letter))
      .filter((letter) => !exactGuesses().includes(letter));
  };

  const updateStats = () => {
    if (youWon() || youLost()) {
      setStats((prev) => {
        return {
          ...prev,
          played: prev.played + 1,
          win: prev.win + (youWon() ? 1 : 0),
          currentStreak: youWon() ? prev.currentStreak + 1 : 0,
          maxStreak: Math.max(
            prev.maxStreak,
            prev.currentStreak + (youWon() ? 1 : 0)
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
    window.addEventListener("keyup", handleKup);
    return () => {
      window.removeEventListener("keyup", handleKup);
    };
  }, [guesses, currentGuess]);
  return (
    <div className="  flex flex-col justify-center gap-8 items-center">
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
        {(youLost() || youWon()) && (
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
              word={word}
              guess={guesses[i]}
              isGuessed={i < currentGuess}
              key={i}
            />
          );
        })}
      </div>

      <h1 className="hidden"> {word}</h1>
      {(youWon() || youLost()) && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          currentGuess={currentGuess}
          word={word}
          init={init}
          youWon={youWon}
          youLost={youLost}
          stats={stats}
        />
      )}
      <Keyboard
        allGuesses={allGuesses}
        inexactGuesses={inexactGuesses}
        exactGuesses={exactGuesses}
        handleKup={handleKup}
      />
    </div>
  );
}
