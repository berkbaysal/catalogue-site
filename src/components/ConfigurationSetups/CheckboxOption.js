import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

function CheckboxOption({ option, handleOptionChange, setCurrentInputs, optionIndex }) {
    const currentValue = option.optionHasOverride ? option.optionOverride : option.optionDefault;
    function handleCheck(e) {
        handleOptionChange(!currentValue, setCurrentInputs, optionIndex)
    }
    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <FormControlLabel
                size="medium"
                label={option.optionText}
                labelPlacement="start"
                className="input-checkbox"
                control={<Checkbox
                    checked={currentValue}
                    onChange={(e) => { handleCheck(e) }}
                />}
            />

        </div >
    )
}

export default CheckboxOption
