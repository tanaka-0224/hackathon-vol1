import "../types/Visual.css";

const Game = () => {
    return (
      <div>
        <div class ="card-wrong">
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                wrong
             </h1>
        </div>
        <div class ="card-right">
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                right
             </h1>
        </div>
        <div class ="card-asasin">
             <h1 style={{textAlign: "center",lineHeight:"110px",fontSize:65, color:"#000000"}}>
                asasin
             </h1>
        </div>

      </div>
    );
  };

  export default Game;