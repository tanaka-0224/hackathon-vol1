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
      }}
    >
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
        {children}
        <button onClick={onClose}>Start</button>
      </div>
    </div>
  );
};

export default Popup;
