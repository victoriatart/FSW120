import React from "react"

function MainContent(props) {
    return (
        <div className="main">
            <h1>{props.item.title}</h1>
            <h4>{props.item.subTitle}</h4>
            <p>Posted by:{props.item.author}</p>
            <p>on: {props.item.date}</p>
            <hr/>
        </div>
    )
}

export default MainContent