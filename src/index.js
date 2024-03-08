<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
      <App />, 
    document.getElementById("root")
);
=======
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
>>>>>>> 234d7d80c29583f957f00d7ab7b50b5c6866fe34
