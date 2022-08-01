import React from 'react'

function URLConfig({ option }) {
    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <div className="config-sub-text">{option.optionText}</div>
            <input placeholder={option.optionPlaceholder} className="input-field">
            </input>
        </div >
    )
}

export default URLConfig