import "../types/Visual.css";
import { Link} from 'react-router-dom';
import React, {useState} from "react";
import styles from "./ContactForm.module.css"

const Talk  = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };

    return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop: '30px' }}>
        <div style={{ marginRight: '30px'}} >
            <img src="./images/ringo.png" className="slangmaster" alt="slang master"/>
            <p style={{ fontSize:40, textAlign:"center",marginTop: '10px'}}>Slang Master</p>
        </div>
        <div className="talkMaster"  style={{ marginTop: '50px',fontSize:20, display:"flex"}}>
            helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>    
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop: '30px' }}>
            <div className="talkPlayer" style={{marginTop: '-50px',marginLeft: "130px"}}>
               <form>
                    <textarea
                        id="message"
                        className={`${styles.inputText} ${styles.jsInput}`}
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </form>
            </div>
            <div className="pressme" style={{textAlign: "center", fontSize:40, marginLeft:"30px",marginTop:"100px"}}>Send</div>
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