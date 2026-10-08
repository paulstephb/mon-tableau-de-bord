import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ← Import
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { TasksProvider } from "./context/TasksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TasksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
