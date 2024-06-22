import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [
    { id: 1, text: "Finish React project", completed: false },
    { id: 2, text: "Read a book", completed: false },
  ],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    toggleGoalCompletion: (state, action) => {
      const goal = state.goals.find((goal) => goal.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
      }
    },
  },
});

export const { addGoal, deleteGoal, toggleGoalCompletion } = goalsSlice.actions;
export default goalsSlice.reducer;
