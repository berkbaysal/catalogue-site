import React from "react";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Videobox.scss";


function Videobox(props) {

    const [videoPlayerActive, setVideoPlayerActive] = React.useState(false);

    let style = { width: "66%", aspectRatio: "16 / 9" }
    let videoId = "cZdO2e8K29o";
    let label = "This is the video label."
    if (props.width) {
        style.width = props.width + "%";
    }
    if (props.videoId) {
        videoId = props.videoId;
    }
    if (props.label) {
        label = props.label;
    }

    function toggleVideoPlayer() {
        setVideoPlayerActive(true);
    }

    return (
        <div className=" ableton-style">
            <div className="ableton-style-videobox">
                <div className="video-container" style={{ width: style.width }}>
                    {!videoPlayerActive && <FontAwesomeIcon icon={faPlayCircle} className="play-icon" onClick={toggleVideoPlayer} />}
                    {!videoPlayerActive && <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} className="video-thumbnail" style={{ aspectRatio: style.aspectRatio }} ></img>}
                    {videoPlayerActive && <iframe className="video-player" style={{ aspectRatio: style.aspectRatio }} src={`https://www.youtube.com/embed/${videoId}?color=white&autoplay=1`} frameborder="0" allowfullscreen="true"></iframe>}
                    <p className="video-label">{label}</p>
                </div>

            </div>
        </div>

    );
}

export default Videobox;