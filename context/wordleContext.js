import { createContext, useReducer } from "react";
import { Reducer } from "../components/projects/wordle/Reducer";
import words from "../components/projects/wordle/words";

const INITIAL_STATE = {
  word: words[Math.floor(Math.random() * words.length)],
  guesses: ["", "", "", "", "", ""],
  currentGuess: 0,
  won: false,
  lost: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

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

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        allGuesses,
        exactGuesses,
        inexactGuesses,
        handleClick,
        init,
      }}
    >
      {children}
    </Context.Provider>
  );
};
