import React from 'react';
import './App.css';

import circleImg from './icons8-circle-96.png';
import squareImg from './icons8-rounded-square-96.png';

const randomNumber = Math.ceil(Math.random() * 10);

let countersAdded = 0;

function increase() {
  if (countersAdded < randomNumber) {
    countersAdded++;
    document.getElementById("numberAdded").innerHTML = countersAdded;
    document.getElementById("counter" + countersAdded).hidden = false;
  }
}

function decrease() {
  if (countersAdded > 0) {
    document.getElementById("counter" + countersAdded).hidden = true;
    countersAdded--;
    document.getElementById("numberAdded").innerHTML = countersAdded;
  }
}

function App(props) {

  let counterImage;

  if (props.shape === "circle") {
    counterImage = circleImg;
  }
  else if (props.shape === "square") {
    counterImage = squareImg;
  }

  let counters = [];

  for (let i = 0; i < 10; i++) {
    counters.push(
      <div className="box">
        <img src={counterImage} id={"counter" + (i + 1)} className="counter" hidden/>
      </div>
    );
  } 

  let compStyle = {
    width: props.scale * 100,
    height: props.scale * 100,
    fontSize: (props.scale * 5)
  };

  return (
    
    <div id="comp" style={compStyle}>
      <div className="number">{randomNumber}</div>
      <div id="numberAdded" className="number">0</div>
      <div id="container">
        {counters}
      </div>
      <div id="buttons">
        <div className="button" onClick={increase}>+</div>
        <div className="button" onClick={decrease}>-</div>
      </div>
    </div>

  )

}

export default App;
