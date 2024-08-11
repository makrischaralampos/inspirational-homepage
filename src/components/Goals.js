import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { addGoal, deleteGoal, toggleComplete } from "../features/goalsSlice";

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
    <div className="goals">
      <h2>Today's Goals</h2>
      <GoalInput addGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        deleteGoal={handleDeleteGoal}
        toggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default Goals;
