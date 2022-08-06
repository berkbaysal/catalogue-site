import React from 'react'
import { Select, MenuItem } from '@mui/material'

function SelectConfigOneLine({ option, handleOptionChange, setCurrentInputs, optionIndex, optionChoices }) {

    let independantValue = option.optionHasOverride ? option.optionOverride[0] : option.optionDefault[0];
    let dependantValue = option.optionHasOverride ? option.optionOverride[1] : option.optionDefault[1];

    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName[0]}:</h3>
            <div className="input-select-container">
                <h3 className="config-sub-text">{option.optionText[0]}:</h3>
                <Select
                    size="small"
                    autoWidth
                    className="input-select"
                    value={independantValue}
                    onChange={(e) => handleOptionChange([e.target.value,option.optionDefault[1]], setCurrentInputs, optionIndex)} >

                    {optionChoices.map(optionChoice => (<MenuItem value={optionChoice} key={optionChoice}>{optionChoice}</MenuItem>))}
                </Select>

            </div>
            <h3 className="config-sub-head" style={{marginTop:"2rem"}}>{option.optionName[1]}:</h3>
            <div className="input-select-container">
                <h3 className="config-sub-text">{option.optionText[0]}:</h3>
                <Select
                    size="small"
                    autoWidth
                    className="input-select"
                    value={dependantValue}
                    onChange={(e) => handleOptionChange([independantValue,e.target.value], setCurrentInputs, optionIndex)} >

                    {option.optionDependantChoices[independantValue-1].map(optionChoice => (<MenuItem value={optionChoice} key={optionChoice}>{optionChoice}</MenuItem>))}
                </Select>

            </div>
        </div >
    )
}

export default SelectConfigOneLine