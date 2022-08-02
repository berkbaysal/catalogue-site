import React from "react";

function Card(props) {
    const style = {};
    if(props.backgroundColor){
        style.backgroundColor = props.backgroundColor;
    }

    return (
        <div className="ableton-style-card">
            <div className="card-container">
                <div className="card-image-container">
                    <img src={props.content.image} alt="" className="card-image" />
                </div>
                <div className="card-text-container" style={style}>
                    <p className="main-text">{props.content.text}</p>
                    {props.content.linkText && <a href={props.content.linkSrc} className="card-link">{props.content.linkText}</a>}
                </div>
            </div>
        </div>);
}

export default Card;