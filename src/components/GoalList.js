import React from "react";
import List from "@mui/material/List";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, deleteGoal, toggleComplete }) => {
  return (
    <List sx={{ mt: 2 }}>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          deleteGoal={deleteGoal}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
};

export default GoalList;
