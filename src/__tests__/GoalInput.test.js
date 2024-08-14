import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GoalInput from "../components/GoalInput";

test("renders input and button", () => {
  render(<GoalInput addGoal={jest.fn()} />);
  expect(screen.getByPlaceholderText("Enter your goal")).toBeInTheDocument();
  expect(screen.getByText("Add Goal")).toBeInTheDocument();
});

test("calls addGoal on form submit", () => {
  const addGoalMock = jest.fn();
  render(<GoalInput addGoal={addGoalMock} />);

  fireEvent.change(screen.getByPlaceholderText("Enter your goal"), {
    target: { value: "New Goal" },
  });
  fireEvent.click(screen.getByText("Add Goal"));

  expect(addGoalMock).toHaveBeenCalledWith("New Goal");
});
