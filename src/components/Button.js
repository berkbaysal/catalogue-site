import React from 'react'
import "../css/Button.scss"

function Button({ label, onClick, addClass=""}) {

    return (
        <div className={`btn ${addClass}`} onClick={onClick}>
            <div className="btn-label">{label}</div>
        </div>
    )
}

export default Button