import React, { useState } from 'react';
import './App.css';

import circleImg from './icons8-circle-96.png';
import squareImg from './icons8-rounded-square-96.png';


function App(props) {
  let counterImage;
  const [state, setState] = useState(0);

  function increase() {
    const countersAdded = state + 1;
  
    if (countersAdded < props.target) {
      setState(countersAdded);
    }
  }
  
  function decrease() {
    const countersAdded = state - 1;
  
    if (countersAdded >= 0) {
      setState(countersAdded)
    }
  }

  if (props.shape === "circle") {
    counterImage = circleImg;
  } else if (props.shape === "square") {
    counterImage = squareImg;
  }

  let counters = [];

  for (let i = 0; i < 10; i++) {
    counters.push(
      <div className="box">
        <img src={counterImage} className="counter" hidden={i >= state} />
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
      <div className="number">{props.target}</div>
      <div id="numberAdded" className="number">{state}</div>
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
