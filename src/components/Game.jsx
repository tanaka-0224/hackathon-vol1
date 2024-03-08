import "../types/Visual.css";
import { Link} from 'react-router-dom';

const Game = ({ setResult }) => {
   const handleWin = () => {
      setResult('win');
    };

   const handleLose = () => {
      setResult('lose');
    };
   
   return (
      <div>
        <div class ="card-wrong" >
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                wrong
             </h1>
        </div>
        <Link to="/result" style={{ textDecoration: 'none' }}>
        <div class ="card-right" onClick={handleWin}>
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                right
             </h1>
        </div>
        </Link>
        <Link to="/result" style={{ textDecoration: 'none' }}>
        <div class ="card-asasin" onClick={handleLose}>
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                asasin
             </h1>
        </div>
        </Link>
      </div>
    );
  };

  export default Game;