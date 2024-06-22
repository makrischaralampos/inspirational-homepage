import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addGoal,
  deleteGoal,
  toggleGoalCompletion,
} from "../slices/goalsSlice";
import GoalItem from "./GoalItem";
import "./Goals.css";

const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals.goals);
  const [goalText, setGoalText] = useState("");

  const handleAddGoal = () => {
    if (goalText.trim()) {
      dispatch(addGoal({ id: Date.now(), text: goalText, completed: false }));
      setGoalText("");
    }
  };

  return (
    <div className="goals">
      <h2>Goals for the Day</h2>
      <div className="goal-input">
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          placeholder="Write your goal"
        />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>
      <ul className="goal-list">
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            deleteGoal={() => dispatch(deleteGoal(goal.id))}
            toggleGoalCompletion={() => dispatch(toggleGoalCompletion(goal.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default Goals;
