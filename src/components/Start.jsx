import "../types/Visual.css";
import { Link} from 'react-router-dom';
import React from "react";

const Start  = () => {
    return (
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <h1 style={{textAlign: "center", lineHeight:"60px",fontSize:250}}>
          EchoLingo
         </h1>
          <Link to="/game" style={{ textDecoration: 'none' }}>
            <div class ="neumobutton">
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                Start
             </h1>
            </div>
          </Link>
          <Link to="/rules" style={{ textDecoration: 'underline #53A296' }}>
              <h2 style={{textAlign: "center",lineHeight:"110px",fontSize:70,color:"#000000"}}>
                Rules
             </h2>
          </Link>
      </div>
    );
  };
  
  export default Start;