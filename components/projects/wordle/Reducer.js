export const Reducer = (state, action) => {
  if (action.type === "ENTER") {
    return {
      ...state,
      currentGuess: state.currentGuess + 1,
      won: state.word === state.guesses[state.currentGuess],
      lost: state.currentGuess === 5 && state.word !== state.guesses[5],
    };
  }
  if (action.type === "BACKSPACE") {
    return {
      ...state,
      guesses: state.guesses.map((guess, index) => {
        if (index === state.currentGuess) {
          return guess.slice(0, -1);
        }
        return guess;
      }),
    };
  }
  if (action.type === "KEY") {
    return {
      ...state,
      guesses: state.guesses.map((guess, index) => {
        if (index === state.currentGuess) {
          return guess + action.payload;
        }
        return guess;
      }),
    };
  }
  if (action.type === "INIT") {
    return {
      ...state,
      word: action.payload,
      guesses: new Array(6).fill(""),
      currentGuess: 0,
      won: false,
      lost: false,
    };
  }
  throw new Error("Not Implemented");
};
