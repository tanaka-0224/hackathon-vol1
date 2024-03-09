import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rules from './components/Rules';
import Game from './components/Game';
import Start from './components/Start';
import ResultWin from './components/ResultWin';
import ResultLose from './components/ResultLose';
import Talk from './components/Talk';


function App () {
  const [result, setResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/game"  element={<Game/>}/>
        <Route path="/rules" element={<Rules />} />  
        <Route path="/resultwin" element={<ResultWin/>}/> 
        <Route path="/resultlose" element={<ResultLose/>}/> 
        <Route path="/talk" element={<Talk/>}/> 
     </Routes>
    </Router>
  );
}

export default App;
