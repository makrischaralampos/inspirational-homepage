import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "../features/goalsSlice";
import Goals from "../components/Goals";

const renderWithRedux = (component) => {
  const store = configureStore({ reducer: { goals: goalsReducer } });
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

test("adds a new goal", () => {
  renderWithRedux(<Goals />);

  fireEvent.change(screen.getByPlaceholderText("Enter your goal"), {
    target: { value: "New Goal" },
  });
  fireEvent.click(screen.getByText("Add Goal"));

  expect(screen.getByText("New Goal")).toBeInTheDocument();
});

test("toggles goal completion", () => {
  renderWithRedux(<Goals />);

  fireEvent.click(screen.getByText("Complete"));
  expect(screen.getByText("Finish React project")).toHaveStyle(
    "text-decoration: line-through"
  );

  fireEvent.click(screen.getByText("Undo"));
  expect(screen.getByText("Finish React project")).toHaveStyle(
    "text-decoration: none"
  );
});
