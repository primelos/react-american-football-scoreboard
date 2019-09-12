//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(10);
  const [away, setAway] = useState(3);
  const [quarter, setQuarter] = useState(1)

  const handleQuarter = quarter => {
    setQuarter(quarter);
  }

  // const homeScore = 0;
  // const awayScore = 0;
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">49ers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Lions</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHome(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(home + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button                className="awayButtons__touchdown" onClick={() => setAway(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(away + 3)}>Away Field Goal</button>
        </div>
      </section>
      
    </div>
    
  );

}

export default App;
const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// const sect1 = document.querySelector('.container');
// const quat = document.createElement('section');
// const div8 = document.createElement('div')
// div8.classList.add('botton')
// const dutton2 = document.createElement('button')
// dutton2.textContent = `Quarter`
// div8.appendChild(dutton2)
// quat.appendChild(div8)
// sect1.appendChild(quat)