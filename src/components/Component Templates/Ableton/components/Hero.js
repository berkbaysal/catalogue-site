import React from "react";
import heroImage from "../assets/img/hero-image.jpg"
function Hero() {
    return (
    <section className="ableton-style-hero">
        <div className="hero-image-container">
            <img src={heroImage} alt="" className="hero-image" />
            <h1 className="hero-image-overlay">Ableton</h1>
        </div>
    </section>  );
}

export default Hero;