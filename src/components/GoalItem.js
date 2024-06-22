import React from "react";
import "./Goals.css";

const GoalItem = ({ goal, deleteGoal, toggleGoalCompletion }) => (
  <li className={`goal-item ${goal.completed ? "completed" : ""}`}>
    <span onClick={toggleGoalCompletion}>{goal.text}</span>
    <button onClick={deleteGoal} className="delete-button">
      Delete
    </button>
  </li>
);

export default GoalItem;
