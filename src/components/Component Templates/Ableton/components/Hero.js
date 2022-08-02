import React from "react";
import HeroImage from "../assets/img/hero-image.jpg"
import "../css/Hero.scss"

function Hero(props) {

    let heroImage;
    let textOverlay = "Ableton";
    if (props.heroImage) {
        heroImage = props.heroImage;
    }
    if (props.textOverlay) {
        textOverlay = props.textOverlay;
    }
    return (
        <div className="ableton-style">
            <section className="ableton-style-hero">
                <div className="hero-image-container">
                    <img src={heroImage ? heroImage : HeroImage} alt="" className="hero-image" />
                    <h1 className="hero-image-overlay">{textOverlay}</h1>
                </div>
            </section>
        </div>
    );
}

export default Hero;