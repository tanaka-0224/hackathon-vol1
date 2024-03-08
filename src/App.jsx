import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./Rules";
import Game from "./components/Game";
import Start from "./Start";
import ResultLose from "./components/ResultLose";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/resultlose" element={<ResultLose />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
}

export default App;
