import React from "react";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Videobox(props) {

    const [videoPlayerActive, setVideoPlayerActive] = React.useState(false);

    let style = { width: "100%", aspectRatio: "16 / 9" }
    if (props.width) {
        style.width = props.width;
    }

    function toggleVideoPlayer() {
        setVideoPlayerActive(true);
    }

    return (
        <div className="ableton-style-videobox">
            <div className="video-container" style={{ width: style.width }}>
                {!videoPlayerActive && <FontAwesomeIcon icon={faPlayCircle} className="play-icon" onClick={toggleVideoPlayer}/>}
                {!videoPlayerActive && <img src={`https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`} className="video-thumbnail" style={{ aspectRatio: style.aspectRatio }} ></img>}
                {videoPlayerActive && <iframe className="video-player" style={{ aspectRatio: style.aspectRatio}} src={`https://www.youtube.com/embed/${props.videoId}?color=white&autoplay=1`} frameborder="0" allowfullscreen="true"></iframe>}
                <p className="video-label">{props.label}</p>              
            </div>
            
        </div>
    );
}

export default Videobox;