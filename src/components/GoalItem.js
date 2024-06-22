import React from "react";

const GoalItem = ({ goal, deleteGoal, toggleGoalCompletion }) => (
  <li className={`goal-item ${goal.completed ? "completed" : ""}`}>
    <span onClick={toggleGoalCompletion}>{goal.text}</span>
    <button onClick={deleteGoal}>Delete</button>
  </li>
);

export default GoalItem;
