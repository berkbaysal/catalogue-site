import React from 'react'
import { TextField } from '@mui/material'

function SingleLineText({ option, handleOptionChange, setCurrentInputs, optionIndex }) {


    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <div className="config-sub-text">{option.optionText}</div>
            <TextField
                size = "small"
                label={option.optionPlaceholder}
                className="input-field"
                value={option.optionHasOverride ? option.optionOverride : option.optionDefault}
                onChange={(e) => handleOptionChange(e, setCurrentInputs, optionIndex)} />

        </div >
    )
}

export default SingleLineText