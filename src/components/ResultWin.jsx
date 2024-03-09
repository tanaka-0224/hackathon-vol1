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
          animationDuration: Math.random() * 10+5+ 's',
          backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) // ランダムな色
        });
        setConfetti(newConfetti);
      },50); // 新しい紙吹雪のパーティクルを追加する間隔

      return () => clearInterval(interval);
  }, [isWin, confetti]);

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
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '200vh', height: '100%' }}>
      <div className='flame'/>
      <div>
        <p style={{textAlign: "center",lineHeight:"0px",fontSize:300}}>WIN</p> <Congratulation isWin={true} />      
      </div>
    
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div class ="neumobutton" >
          <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
              Replay
          </h1>
      </div>
    </Link>
  </div>
  );
}

export default ResultWin;
