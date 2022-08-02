import React from "react";

function Infobox(props) {
    let topText,bottomText;
    if(!props.content){
        topText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quisquam reiciendis earum velit ex atque corrupti, quaerat officiis voluptas, error eveniet tempora alias aspernatur nesciunt? Sed impedit delectus minus ipsam enim quia nobis. Doloremque, nisi."
    }
    else{
        topText = props.content.topText;
    }
    if(!props.content){
        bottomText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae, et incidunt fugiat eos, suscipit sapiente eum nulla atque aliquam, maiores iste? Nisi, eveniet sed magnam exercitationem sint delectus quo dolor ut minima odio quam."
    }
    else{
        bottomText = props.content.bottomText;
    }
    return (
        <div className="ableton-style-infobox">
            <p className="top-line">{topText}</p>
            <p className="bottom-line">{bottomText}</p>
        </div>
    );
}

export default Infobox;