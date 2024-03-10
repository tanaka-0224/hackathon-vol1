import React, { useState } from 'react';
import "../types/Visual.css";
import { Link } from 'react-router-dom';
import styles from "./ContactForm.module.css";

const Talk = () => {
    const [message, setMessage] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const GPT_CHAT_URI = `${process.env.REACT_APP_GPT_API_URL}/gpt/scene_chat`;

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        setIsLoading(true); // 开始加载时设置isLoading为true
        setDisplayMessage("Loading..."); // 显示加载信息

        fetch(GPT_CHAT_URI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input_sentences: message }),
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false); // 加载完成设置isLoading为false
                // 组合显示聊天消息和反馈信息
                setDisplayMessage(`${data.chat_message}\n\nFeedback: ${data.Feedback}`);
            })
            .catch(error => {
                setIsLoading(false); // 出错时也需要设置isLoading为false
                console.error('Error:', error);
                setDisplayMessage("Failed to load data."); // 显示错误信息
            });
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div style={{ marginRight: '30px' }}>
                    <img src="./images/ringo.png" className="slangmaster" alt="slang master" />
                    <p style={{ fontSize: 40, textAlign: "center", marginTop: '10px' }}>Slang Master</p>
                </div>
                <div className="talkMaster" style={{ marginTop: '50px', fontSize: 20, display: "flex" }}>
                    {isLoading ? "Got it ! Emm..." : displayMessage}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div className="talkPlayer" style={{ marginTop: '-50px', marginLeft: "130px" }}>
                    <form onSubmit={(e) => e.preventDefault()}>
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
                <div
                    className="pressme"
                    style={{ textAlign: "center", fontSize: 40, marginLeft: "30px", marginTop: "100px" }}
                    onClick={handleSendMessage}>
                    Send
                </div>
            </div>
            <Link to="/game" style={{ textDecoration: 'none' }}>
                <div className="neumobutton">
                    <h1 style={{ textAlign: "center", lineHeight: "110px", fontSize: 65, color: "#000000" }}>
                        Replay
                    </h1>
                </div>
            </Link>
        </div>
    );
};

export default Talk;
