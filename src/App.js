import {useState} from "react";

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

        <div className="photo">
          <img src="/images/Pikachu2.png" alt="PikachuWaving"/>
        </div>

        <div className="greeting">
          <h1>Howdy!</h1>
          <p>{paragraph}</p>
        </div>

        <div className="btn-container">
          <button onClick={handleName} className="button">Name</button>
          <buttonn onClick={handleSkills} className="button">Skills</buttonn>
        </div>

        <div className="like-container">
          <div className="counter">{count}</div>
          <img src="/images/Heart.png" alt="Heart" onClick={counter}/>
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/pikachu-pikachu-5638a118a?trk=people-guest_people_search-card" target="blank"><img className="icon" src="/images/LinkedIn.png" alt="Pikachu LnkedIn Profile"></img></a>
          <a href="https://twitter.com/piiiikaachu?lang=en" target="blank"><img className="icons" src="/images/Twitter.png" alt="Pikachu Twitter Profile"></img></a>
        </div>

        
    </div>
  );
}

export default App;
