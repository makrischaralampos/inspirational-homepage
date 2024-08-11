import React from "react";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, deleteGoal, toggleComplete }) => {
  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          deleteGoal={deleteGoal}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default GoalList;
