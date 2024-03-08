import "./Start.css";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>ゲーム名</h1>
      <Link to="/game">
        <button>START</button>
      </Link>
      <Link to="/rules">
        <button>RULES</button>
      </Link>
    </div>
  );
};

export default Start;
