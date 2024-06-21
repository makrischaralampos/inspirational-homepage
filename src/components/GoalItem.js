import React from "react";

const GoalItem = ({ goal, deleteGoal, toggleGoalCompletion }) => (
  <li className={`goal-item ${goal.completed ? "completed" : ""}`}>
    <span onClick={() => toggleGoalCompletion(goal.id)}>{goal.text}</span>
    <button onClick={() => deleteGoal(goal.id)}>Delete</button>
  </li>
);

export default GoalItem;
