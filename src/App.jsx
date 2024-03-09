import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rules from './components/Rules';
import Game from './components/Game';
import Start from './components/Start';
import Result from './components/Result';

function App () {
  const [result, setResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/game"  element={<Game setResult={setResult}/>}/>
          
        
        <Route path="/rules" element={<Rules />} />  
        <Route path="/result" element={<Result result={result}/>}/> 
      
     </Routes>
    </Router>
  );
}

export default App;
