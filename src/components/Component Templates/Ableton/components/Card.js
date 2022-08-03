import React from "react";
import "../css/Card.scss"
import CardImage from "../assets/img/card-image.jpg"
function Card(props) {
    
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam nulla perferendis deleniti cupiditate repellendus et obcaecati expedita natus, dolorem alias laudantium omnis recusandae? Voluptas expedita aspernatur facilis at perferendis, odit dolor laborum dolore, nobis accusantium magnam corrupti? Laudantium, assumenda. Consectetur illum aliquam provident repellendus et eveniet obcaecati id minus.";
    if (props.text) {
        text = props.text;
    }


    return (
        <div className="ableton-style">
            <div className="ableton-style-card">
                <div className="card-container">
                    <div className="card-image-container">
                        <img src={props.image ? props.image : CardImage} alt="" className="card-image" />
                    </div>
                    <div className="card-text-container">
                        <p className="main-text">{text}</p>
                        {props.link[0] && <a href={props.link[1] ? props.linkSrc : "#"} target={props.link[1]?"_blank":""} className="card-link">{props.link[0]}</a>}
                    </div>

                </div>
            </div>
        </div>);
}

export default Card;