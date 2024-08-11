import React, { useState } from "react";

const GoalInput = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      addGoal(goal);
      setGoal("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your goal"
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalInput;
