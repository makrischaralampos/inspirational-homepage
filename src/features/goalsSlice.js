import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [
    { id: 1, text: "Finish React project", completed: false },
    { id: 2, text: "Read a book", completed: false },
    { id: 3, text: "Exercise for 30 minutes", completed: true },
  ],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const goal = state.goals.find((goal) => goal.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
      }
    },
  },
});

export const { addGoal, deleteGoal, toggleComplete } = goalsSlice.actions;
export default goalsSlice.reducer;
