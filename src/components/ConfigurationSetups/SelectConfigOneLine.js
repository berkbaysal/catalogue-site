import React from 'react'
import { Select, MenuItem } from '@mui/material'

function SelectConfigOneLine({ option, handleOptionChange, setCurrentInputs, optionIndex, optionChoices }) {


    return (
        <div className='option-container'>
            <div className="input-select-container">
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <Select
                size="small"
                autoWidth
                label="age"
                className="input-select"
                value={option.optionHasOverride ? option.optionOverride : option.optionDefault}
                onChange={(e) => handleOptionChange(e.target.value, setCurrentInputs, optionIndex)} >

                {optionChoices.map(optionChoice=>(<MenuItem value={optionChoice} key={optionChoice}>{optionChoice}</MenuItem>))}
            </Select>
            </div>
        </div >
    )
}

export default SelectConfigOneLine