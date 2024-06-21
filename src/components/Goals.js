import React, { useState } from "react";
import GoalItem from "./GoalItem";

const mockGoals = [
  { id: 1, text: "Finish React project", completed: false },
  { id: 2, text: "Read a book", completed: false },
];

const Goals = () => {
  const [goals, setGoals] = useState(mockGoals);
  const [goalText, setGoalText] = useState("");

  const addGoal = () => {
    setGoals([...goals, { id: Date.now(), text: goalText, completed: false }]);
    setGoalText("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const toggleGoalCompletion = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div className="goals">
      <h2>Goals</h2>
      <input
        type="text"
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
        placeholder="Enter a new goal"
      />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            deleteGoal={deleteGoal}
            toggleGoalCompletion={toggleGoalCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default Goals;
