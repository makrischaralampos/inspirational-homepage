import React from "react";

const GoalItem = ({ goal, deleteGoal, toggleComplete }) => {
  return (
    <li className="goal-item">
      <span
        style={{ textDecoration: goal.completed ? "line-through" : "none" }}
      >
        {goal.text}
      </span>
      <button onClick={() => toggleComplete(goal.id)}>
        {goal.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteGoal(goal.id)}>Delete</button>
    </li>
  );
};

export default GoalItem;
