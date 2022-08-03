import React from 'react'
import { TextField } from '@mui/material'

function MultiLineText({ option, handleOptionChange, setCurrentInputs, optionIndex }) {


    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <div className="config-sub-text">{option.optionText}</div>
            <TextField
                multiline
                minRows="2"
                size = "small"
                label={option.optionPlaceholder}
                className="input-field-multiline"
                value={option.optionHasOverride ? option.optionOverride : option.optionDefault}
                onChange={(e) => handleOptionChange(e.target.value, setCurrentInputs, optionIndex)} />

        </div >
    )
}

export default MultiLineText