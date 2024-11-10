import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

