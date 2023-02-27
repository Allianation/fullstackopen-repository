import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: " ",
  reducers: {
    filterChange(state, action) {
      return action.payload; // mutate the state all you want with immer
    },
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
