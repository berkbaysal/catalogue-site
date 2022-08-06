import React from "react";
import ImageOne from "../../../../assets/img/three-images-one.jpg"
import ImageTwo from "../../../../assets/img/three-images-two.jpg"
import ImageThree from "../../../../assets/img/three-images-three.jpg"
import "../css/ThreeImages.scss"

function ThreeImages(props) {
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
            <div className="ableton-style-three-images">
                <div className="geometric-background" style={style}></div>
                <div className="image-container-left">
                    <div className="top-image">
                        <img src={props.imageOne ? props.imageOne : ImageOne} alt="" className="image-one" />
                    </div>
                    <div className="bottom-image">
                        <img src={props.imageTwo ? props.imageTwo : ImageTwo} alt="" className="image-two" /></div>
                </div>
                <div className="image-container-right">
                    <img src={props.imageThree ? props.imageThree : ImageThree} alt="" className="image-three" />
                </div>
            </div>
        </div>
    );
}

export default ThreeImages;