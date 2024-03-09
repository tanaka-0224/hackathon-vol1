import "../types/Visual.css";
import { Link} from 'react-router-dom';
import React from "react";

const Talk  = () => {
    return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop: '30px' }}>
        <div style={{ marginRight: '30px'}} >
            <img src="./images/ringo.png" className="slangmaster" alt="slang master"/>
            <p style={{ fontSize:40, textAlign:"center",marginTop: '10px'}}>Slang Master</p>
        </div>
        <div className="talkMaster"  style={{ marginTop: '50px'}}>
            hello
        </div>    
        </div>
        <div className="talkPlayer" style={{marginTop: '-30px'}}>
            hello, master
        </div>
        <Link to="/game" style={{ textDecoration: 'none' }}>
            <div class ="neumobutton">
                <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                    Replay
                </h1>
            </div>
        </Link>
    </div>
    );
  };
  
  export default Talk;