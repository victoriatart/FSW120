import React from "react"

function SuperHero(props) {

    const infobox=()=> {
        alert(props.item.catchPhrase)
    }
    return (
        <div onClick={infobox} className="super-hero-list">
            <h1>{props.item.name}</h1>
            <h2>{props.item.show}</h2>
            <p>{props.item.catchPhrase}</p>
            <img src={props.item.imageName} alt="" />
        </div>
    )
}

export default SuperHero;