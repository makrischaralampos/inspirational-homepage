import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

// Create a context for theme mode
const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

/* const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#121212",
    },
  },
}); */

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </ThemeModeContext.Provider>
  );
}

export default App;
