import React from "react"

import VacationSpot from "./VacationSpot"
import vacationData from "./vacationData"


function App() {
    const vacationComponents = vacationData.map(item => <VacationSpot key={item.id} item={item} />)
    
    return (
        <div className="vacation-list">
            {vacationComponents}
        </div>
    )
}

export default App