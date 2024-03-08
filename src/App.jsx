import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rules from './components/Rules';
import Game from './components/Game';
import Start from './components/Start';
import Result from './components/Result';

function App () {
  return (
    <Router>  
     <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/game"  element={<Game />}/>
        <Route path="/rules" element={<Rules />} />  
        <Route path="/result" element={<Result />} />    
          </Routes>
    </Router>
  );
};

export default App;


