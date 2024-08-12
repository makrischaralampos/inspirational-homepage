import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, display: "flex", gap: 1 }}
    >
      <TextField
        fullWidth
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your goal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" sx={{ width: "10%" }}>
        Add Goal
      </Button>
    </Box>
  );
};

export default GoalInput;
