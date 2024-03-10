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

      <Link to="/talk" style={{ textDecoration: 'underline #428278' }}>
        <h2 style={{textAlign: "center",fontSize:65,marginTop:"0px",color:"#000000"}}>
          Talk with Slang Master
        </h2>
      </Link>
    
    <Link to="/game" style={{ textDecoration: 'none' }}>
      <div className ="neumobutton" >
          <h1 style={{textAlign: "center",marginTop:"0px",fontSize:65, color:"#000000"}}>
              Replay
          </h1>
      </div>
    </Link>
  </div>
  );
}

export default ResultLose;
