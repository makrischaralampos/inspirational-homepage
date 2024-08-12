import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { addGoal, deleteGoal, toggleComplete } from "../features/goalsSlice";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Goals = () => {
  const goals = useSelector((state) => state.goals.goals);
  const dispatch = useDispatch();

  const handleAddGoal = (goal) => {
    dispatch(addGoal(goal));
  };

  const handleDeleteGoal = (id) => {
    dispatch(deleteGoal(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Today's Goals
      </Typography>
      <GoalInput addGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        deleteGoal={handleDeleteGoal}
        toggleComplete={handleToggleComplete}
      />
    </Paper>
  );
};

export default Goals;
