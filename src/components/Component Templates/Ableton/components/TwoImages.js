import React from "react";
import ImageOne from "../assets/img/two-images-one.jpg"
import ImageTwo from "../assets/img/two-images-two.jpg"
import "../css/TwoImages.scss"

function TwoImages(props) {
    let style = {};
    let align = "right";
    if (props.align) {
        align = props.align.toLowerCase();
    }
    if (align === "right") {
        style.right = 0;
    }
    else if (align === "left") {
        style.left = 0;
    }
    else if (align === "center") {
        style.left = "20%";
    }
    if (props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }


    return (
        <div className="ableton-style">
            <div className="ableton-style-two-images">
                <div className="geometric-background" style={style}></div>
                <div className="image-container">
                    <img src={props.imageOne ? props.imageOne : ImageOne} alt="" className="image-one" />
                    <img src={props.imageTwo ? props.imageTwo : ImageTwo} alt="" className="image-two" />
                </div>
            </div>
        </div>
    );
}

export default TwoImages;