import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterBy: " ",
  },
  reducers: {
    filterChange(state, action) {
      state.filterBy = action.payload;
      console.log(JSON.parse(JSON.stringify(state)));
    },
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
