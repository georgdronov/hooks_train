import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StateHook from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import InputFocus from "./components/InputFocus";
import { FactorialCalculator } from "./components/FactorialCalculator";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <div className="App">
      <div className="container align-items-center justify-content-center text-center mt-5">
        <h1>Hello world</h1>
        <>
          <StateHook />
        </>
        <>
          <DataFetcher />
        </>
        <>
          <InputFocus />
        </>
        <>
          <FactorialCalculator />
        </>
        <>
          <ThemeProvider>
            <>
              <h3>Them Switcher!</h3>
              <ThemeToggleButton />
            </>
          </ThemeProvider>
        </>
      </div>
    </div>
  );
}

export default App;
