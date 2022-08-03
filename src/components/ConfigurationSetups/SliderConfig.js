import React from 'react'
import Slider from "@mui/material/Slider"
import { InputAdornment, OutlinedInput } from '@mui/material'
function SliderConfig({ option, handleOptionChange, setCurrentInputs, optionIndex }) {
    function validateEntry(e) {
        const regex = /^\d+$/
        if (regex.test(e.target.value) || e.target.value==="") {
            let newVal = parseInt(e.target.value)?parseInt(e.target.value):0
            if(newVal>100){newVal=100};
            if(newVal<0){newVal=0};
            handleOptionChange(newVal, setCurrentInputs, optionIndex)
        }
    }
    return (

        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <div className="config-sub-text">{option.optionText}</div>
            <div className="slider-ui-container">
                <div className="slider-value-container">

                    <OutlinedInput
                        value={option.optionHasOverride ? option.optionOverride : option.optionDefault}
                        className="input-label-value"
                        onChange={validateEntry}
                        endAdornment={<InputAdornment position="end">%</InputAdornment>} />


                </div>

                <div className="slider-container">
                    <Slider className="input-slider"
                        value={option.optionHasOverride ? option.optionOverride : option.optionDefault}
                        onChange={(e) => { handleOptionChange(e.target.value, setCurrentInputs, optionIndex) }} />
                </div>
            </div>
        </div >

    )
}

export default SliderConfig