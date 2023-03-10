import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: anecdotesAtStart.map(asObject),
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((a) => a.id === id);

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      const newState = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

      newState.sort((a, b) => {
        if (a.votes === b.votes) {
          return 0;
        }
        if (a.votes > b.votes) {
          return -1;
        }
        return 1;
      });

      return newState;
    },
    createAnecdote(state, action) {
      const anecdote = action.payload;
      state.push(asObject(anecdote)); // mutate the state all you want with immer
    },
  },
});

export const { voteAnecdote, createAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
