import {useState} from "react";
import Pikachu2 from "./images/Pikachu2.png";
import Heart from "./images/HeartBeat.png";
import LinkedIn from "./images/LinkedIn.png";
import Twitter from "./images/Twitter.png";

function App() {

  const [paragraph, setParagraph] = useState("My name is Sasha.");
  const [count, setCount] = useState(0);

  const handleName =()=>{
    setParagraph("My name is Sasha.")
  }

  const handleSkills =()=>{
    setParagraph("I'm a Frontend Developer")
  }

  const counter =()=>{
  setCount(count + 1)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="photo">
          <img src={Pikachu2} alt="PikachuWaving"/>
        </div>

        <div className="greeting">
          <h1>Howdy!</h1>
          <p>{paragraph}</p>
        </div>

        <div className="buttons">
          <button onClick={handleName} className="btn">Name</button>
          <buttonn onClick={handleSkills} className="btn">Skills</buttonn>
        </div>

        <div className="likes">
          <div className="counter">{count}</div>
          <img className="heart" src={Heart} alt="Heart" onClick={counter}/>
        </div>

        <div className="socials">
          <a href="https://twitter.com/piiiikaachu?lang=en" target="blank"><img className="twitter" src={Twitter} alt="Pikachu Twitter Profile"></img></a>
          <a href="https://www.linkedin.com/in/pikachu-pikachu-5638a118a?trk=people-guest_people_search-card" target="blank"><img className="linkedin" src={LinkedIn} alt="Pikachu LnkedIn Profile"></img></a>
        </div>
      </div>
        
    </div>
  );
}

export default App;
