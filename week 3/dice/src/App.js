import React from "react"
import "./App.css"



class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
  };


  diceRoll = numberOfDice => {
    this.setState({
      num1: Math.floor(Math.random() * 6) + 1,
      num2: Math.floor(Math.random() * 6) + 1,
      num3: Math.floor(Math.random() * 6) + 1,
      num4: Math.floor(Math.random() * 6) + 1, 
      num5: Math.floor(Math.random() * 6) + 1,
      num6: Math.floor(Math.random() * 6) + 1,
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Dice Roll</h1>
        <div className="buttons">
          <h1>{this.state.num1}</h1>
          <h1>{this.state.num2}</h1>
          <h1>{this.state.num3}</h1>
          <h1>{this.state.num4}</h1>
          <h1>{this.state.num5}</h1>
          <h1>{this.state.num6}</h1>
            {[1].map(number => {
                let text = number === 1 ? "die" : "dice";
                return (
                  <div>
                  <button
                     key={number}
                      onClick={() => this.diceRoll(number)}
                      className="button"
                  >
                     {number} {text}
                  </button>
                    <h1>{this.state.num1}</h1>
                  </div>
                );
              })}
            </div>
          </div>
    ) ;
  }
}

export default App;
