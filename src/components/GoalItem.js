import React from "react";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const GoalItem = ({ goal, deleteGoal, toggleComplete }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ textDecoration: goal.completed ? "line-through" : "none" }}
      >
        {goal.text}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="outlined" onClick={() => toggleComplete(goal.id)}>
          {goal.completed ? "Undo" : "Complete"}
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteGoal(goal.id)}
        >
          Delete
        </Button>
      </Box>
    </ListItem>
  );
};

export default GoalItem;
