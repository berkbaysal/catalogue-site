import React from 'react'
import "../css/PricingUnit.scss"

function PricingUnit(props) {
    const content= props.content;
    const listItems = []
    const checkMark = "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg";
    for(let i=4;i<content.length;i++){
        listItems.push(<li key = {"list-item" + i}className="unit-feature"><img src={checkMark} className="check-mark"/><div className="feature-text">{content[i]}</div></li>)
    }
    return (
            <div className="bonsai-pricing-unit-container">
                {props.promoted &&<div className="ribbon">Most Popular</div>}
                <div className="unit-title">{content[0]}</div>
                <div className="unit-subtitle">{content[1]}</div>
                <div className="unit-price">
                    <span className="currency">{props.currency?props.currency:"$"}</span><span className="price">{props.yearly?content[3]:content[2]}</span><span className='interval'>/month</span>
                    <div className="bill-interval">{props.yearly?"Billed yearly":""}</div>
                    </div>
                <ul className="unit-features">
                    {listItems}
                </ul>
                <div className="unit-button">Start Free</div>
            </div>
    )
}

export default PricingUnit