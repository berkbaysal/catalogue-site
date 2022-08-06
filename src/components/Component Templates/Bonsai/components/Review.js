import React from 'react'
import "../css/Review.scss"
import Quotes from "../../../../assets/img/quote-left-solid.svg"
import Profile from "../../../../assets/img/profile-pic.jpg"
function Review(props) {
  //props-image-option
  let defaultText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dignissimos adipisci. Quaerat beatae laborum veritatis eius aspernatur. Incidunt deserunt voluptatem sint aliquam laboriosam eveniet? At, distinctio deserunt suscipit repudiandae quam, reiciendis pariatur tempora maxime officia laboriosam, nulla aut! Dignissimos atque perferendis quibusdam minus voluptatibus fugiat corrupti! Unde molestiae libero dolor!"
  return (
    <div className="bonsai-style">
      <div className="bonsai-review-container">
        <div className="info-container">


          <div className="quote-icon-container">
            <img src={props.image?props.image:Profile} alt="" className="quote-image" />
            <Quotes className="quote-icon" />
          </div>


          <div className="main-quote">{props.review?props.review:defaultText}</div>
          <div className="quote-name">{props.name?props.name:"John Doe"}</div>
          <div className="quote-title">{props.title?props.title:"Designer"}</div>
        </div>
      </div>
    </div>
  )
}

export default Review