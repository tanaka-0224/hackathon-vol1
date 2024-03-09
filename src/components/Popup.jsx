// Popup.jsx

import React from "react";

const Popup = ({ onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10
      }}
    >
      <div style={{ background: "#FBF3BA", padding: "50px", borderRadius: "10px" }}>
        {children}
        <div className="neumobutton" onClick={onClose} style={{fontSize:80, textAlign:"center",lineHeight:"120px"}}>Start</div>
      </div>
    </div>
  );
};

export default Popup;
