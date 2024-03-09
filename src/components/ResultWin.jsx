import { Link} from 'react-router-dom';
import React,{ useEffect, useState }from "react";
import "../types/Visual.css";
import "./Result.css";

const Congratulation = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
      const interval = setInterval(() => {
        const newConfetti = [...confetti];
        newConfetti.push({ // 紙吹雪のパーティクルの情報を追加
          left: Math.random() * 100 + '%',
          animationDuration: Math.random() * 5+5+ 's',
          backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) // ランダムな色
        });
        setConfetti(newConfetti);
      },70); // 新しい紙吹雪のパーティクルを追加する間隔

      return () => clearInterval(interval);
  }, [confetti]);

  return (
    <div className="confetti-container">
      {confetti.map((confetti, index) => (
        <div
          key={index}
          className="confetti"
          style={{
            left: confetti.left,
            backgroundColor: confetti.backgroundColor,
            animationDuration: confetti.animationDuration
          }}
        ></div>
      ))}
    </div>
  );
};


const ResultWin = () => {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '150vh', height: '100%' }}>
      <div>
        <p style={{textAlign: "center",lineHeight:"0px",fontSize:300}}>WIN</p> <Congratulation isWin={true} />      
      </div>
    
      <Link to="/talk" style={{ textDecoration: 'underline #428278' }}>
        <h2 style={{textAlign: "center",marginTop:"0px",fontSize:65,color:"#000000"}}>
          Talk with Slang Master
        </h2>
      </Link>
    
      <Link to="/game" style={{ textDecoration: 'none' }}>
       <div class ="neumobutton" >
          <h1 style={{textAlign: "center",marginTop:"0px",fontSize:65, color:"#000000"}}>
            Replay
          </h1>
        </div>
      </Link>
  </div>
  );
}

export default ResultWin;
