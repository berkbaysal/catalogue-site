import React from "react";


function ThreeImages(props) {
    let style = {};
    if (props.backgroundAlign === "right") {
        style.right = 0;
    }
    else if (props.backgroundAlign === "left") {
        style.left = 0;
    }
    else if (props.backgroundAlign === "center") {
        style.left = "20%";
    }
    if (props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }


    return (
        <div className="ableton-style-three-images">
            <div className="geometric-background" style={style}></div>
            <div className="image-container-left">
                <div className="top-image">
                    <img src={props.content[0]} alt="" className="image-one" />
                </div>
                <div className="bottom-image">
                    <img src={props.content[1]} alt="" className="image-two" /></div>
            </div>
            <div className="image-container-right">
                <img src={props.content[2]} alt="" className="image-three" />
            </div>
        </div>
    );
}

export default ThreeImages;