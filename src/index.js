import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartPage from "./components/StartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartPage />
  </React.StrictMode>
);
