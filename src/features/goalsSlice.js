import { createSlice } from "@reduxjs/toolkit";

// Helper function to load goals from localStorage
const loadGoals = () => {
  const savedGoals = localStorage.getItem("goals");
  return savedGoals ? JSON.parse(savedGoals) : [];
};

// Helper function to save goals to localStorage
const saveGoals = (goals) => {
  localStorage.setItem("goals", JSON.stringify(goals));
};

const initialState = {
  goals: loadGoals(),
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      const newGoal = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.goals.push(newGoal);
      saveGoals(state.goals); // Save to localStorage
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
      saveGoals(state.goals); // Save to localStorage
    },
    toggleComplete: (state, action) => {
      const goal = state.goals.find((goal) => goal.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
        saveGoals(state.goals); // Save to localStorage
      }
    },
  },
});

export const { addGoal, deleteGoal, toggleComplete } = goalsSlice.actions;
export default goalsSlice.reducer;
