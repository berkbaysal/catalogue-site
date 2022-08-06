import React from 'react'
import "../css/Hero.scss"
import ImageOne from "../../../../assets/img/hero-one.jpg"
import ImageTwo from "../../../../assets/img/hero-two.jpg"
import ImageThree from "../../../../assets/img/hero-three.jpg"
import ImageFour from "../../../../assets/img/hero-four.jpg"
function Hero(props) {

    //options: 4 images, background intensity
    return (
        <div className='bonsai-style'>
            <div className='bonsai-style-hero'>
                <div className="background-shape" style={{opacity:props.backgroundIntensity/100}}></div>
                <div className="hero-text">
                    <div className="heading">Everything you need to run your business.</div>
                    <div className="sub-heading">Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</div>
                    <div className="search-bar">
                        <div className="search-field">
                            <input className="input-field"></input>
                        </div>
                        <div className="search-button">Start Free</div>
                    </div>
                </div>
                <div className="hero-images">
                    <img src={props.imageOne?props.imageOne:ImageOne} alt="" className="image-one" />
                    <img src={props.imageTwo?props.imageTwo:ImageTwo} alt="" className="image-two" />
                    <img src={props.imageThree?props.imageThree:ImageThree} alt="" className="image-three" />
                    <img src={props.imageFour?props.imageFour:ImageFour} alt="" className="image-four" />
                </div>
            </div>
        </div>
    )
}

export default Hero