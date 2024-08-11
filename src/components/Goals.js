import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

const Goals = ({ initialGoals }) => {
  const [goals, setGoals] = useState(initialGoals);

  const addGoal = (goal) => {
    setGoals([...goals, { id: Date.now(), text: goal, completed: false }]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const toggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div className="goals">
      <h2>Today's Goals</h2>
      <GoalInput addGoal={addGoal} />
      <GoalList
        goals={goals}
        deleteGoal={deleteGoal}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default Goals;
