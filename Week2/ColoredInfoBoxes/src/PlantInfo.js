import React from "react"

function PlantInfo(props) {
    return (
        <div className="info" style={{backgroundColor: "#A569BD"}}>
            <h3>{props.info.title}</h3>
            <p>Indoor or Outdoor? {props.info.subtitle} </p>
            <p>Light Level?: {props.info.information} </p>
            
        </div>
    )
}


export default PlantInfo