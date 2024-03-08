import { Link} from 'react-router-dom';
import "../types/Visual.css";

const Rules = () => {
    return (
      <div>
        <h1 style={{textAlign: "center", lineHeight:"50px",fontSize:100 ,color: '#428278'}}>
          Rules
        </h1>
        <h2 style={{textAlign: "center", lineHeight:"60px",fontSize:35}}>
        There are 25 cards, each with slang written on them.
        When a card is clicked, the Slang Master provides an example sentence using that slang. 
        Afterward, when the "Select" button is clicked, the card turns either blue, red, or black 
        (blue: 12 cards, red: 12 cards, black: 1 card). 
        The Slang Master knows the color of the cards and mentions a word 
        related to the slangs written on some of the blue cards, along with the number of cards (e.g., Energy 4). 
        Please select cards you think are blue. 
        If you choose a red card, the Slang Master will mention the next word and its number. 
        If you choose a black card, it's game over. If you manage to guess all the blue cards, you win.
        </h2>
        <Link to="/" style={{ textDecoration: 'underline #428278' }}>
            <h3 style={{textAlign: "center",lineHeight:"20px",fontSize:50,color:"#000000"}}>
              Back
            </h3>
        </Link>
      </div>
    );
  };
  
  export default Rules;