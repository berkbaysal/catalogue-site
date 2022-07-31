import React from 'react'
import "../css/Button.scss"

function Button({ label }) {
    return (
        <div className="btn">
            <div className="btn-label">{label}</div>
        </div>
    )
}

export default Button