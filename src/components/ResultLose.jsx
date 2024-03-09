import { Link} from 'react-router-dom';
import React,{ useEffect, useState }from "react";
import "../types/Visual.css";
import "./Result.css";

const ResultLose = () => {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '200vh', height: '100%' }}>
      <div className='flame'/>
      <div>
        <p className="make" style={{textAlign: "center", lineHeight:"0px",fontSize:300}}>LOSE</p>
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

export default ResultLose;
