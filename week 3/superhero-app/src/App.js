import React from "react"
import SuperHero from "./SuperHero"
import superheroData from "./superheroData.json"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      superheros: superheroData
    }
  }

render() {
  const SuperHeroItem = this.state.superheros.map((item => <SuperHero key={item.catchPhrase} item={item} />))
  
  return (
    <div className="superhero-list">
      {SuperHeroItem}
    </div>
     )
  }
}

export default App;
