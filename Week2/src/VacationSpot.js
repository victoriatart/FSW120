import React from "react"

function VacationSpot(props) {
    return (
        <div className="vacation-card">
            <h1>{props.item.place}</h1>
            <p>Price:{props.item.price}</p>
            <p>Time To Go:{props.item.timeToGo}</p>
            <hr/>
        </div>
    )
}

export default VacationSpot