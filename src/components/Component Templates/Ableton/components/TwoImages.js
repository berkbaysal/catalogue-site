import React from "react";


function TwoImages(props) {
    let style = {};
    if(props.backgroundAlign === "right"){
        style.right = 0;
    }
    else if(props.backgroundAlign === "left"){
        style.left = 0;
    }
    else if(props.backgroundAlign === "center"){
        style.left = "20%";
    }
    if(props.backgroundColor){
        style.backgroundColor = props.backgroundColor;
    }
    
    
    return (
        <div className="ableton-style-two-images">
            <div className="geometric-background" style={style}></div>
            <div className="image-container">
                <img src={props.content[0]} alt="" className="image-one" />
                <img src={props.content[1]} alt="" className="image-two" />
            </div>
        </div>
    );
}

export default TwoImages;