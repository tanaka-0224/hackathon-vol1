import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rules from './Rules';
import Game from './Game';
import Start from './Start';

function App () {
  return (
    <Router>  
     <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/game"  element={<Game />}/>
        <Route path="/rules" element={<Rules />} />     
          </Routes>
    </Router>
  );
};

export default App;


