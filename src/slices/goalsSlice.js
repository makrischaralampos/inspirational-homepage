import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {
    setGoals: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setGoals } = goalsSlice.actions;
export default goalsSlice.reducer;
