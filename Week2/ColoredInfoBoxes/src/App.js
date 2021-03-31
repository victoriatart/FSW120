import React from "react"
import PlantInfo from "./PlantInfo"

function App () {
    return (
        <div className="info">
            <PlantInfo
                info={{title: "Peace Lilly", subtitle: "This is an indoor plant.", information: "It requires medium light" }}
            />
            
             <PlantInfo
                info={{title: "Lavender", subtitle: "This is an outfoor plant.", information: "It required high light"}}
            />
            
             <PlantInfo
                info={{title: "Purple Cornflower", subtitle: "This is an outdoor plant.", information: "It requires high light"}}
            />
             
             <PlantInfo
                info={{title: "Snake Plant", subtitle: "This is an indoor plant.", information: "It requires low light"}}
            />
             
             <PlantInfo
                info={{title: "Snake Plant", subtitle: "This is an indoor plant.", information: "It requires low light"}}
            />
            
             <PlantInfo
                info={{title: "Prayer Plant", subtitle: "This is an indoor plant.", information: "It requires low light"}}
            />
            
             <PlantInfo
                info={{title: "Devils Ivy", subtitle: "This is an indoor plant.", information: "It requires low light"}}
            />
            
             <PlantInfo
                info={{title: "Marble Queen", subtitle: "This is an indoor plant.", information: "It requires medium light"}}
            />
            
             <PlantInfo
                info={{title: "Jade Plant", subtitle: "This is an indoor plant.", information: "It requires high light"}}
            />
            
             <PlantInfo
                info={{title: "String of Pearls", subtitle: "This is an indoor plant.", information: "It requires high light"}}
            />
    </div>
        
    )
}

export default App