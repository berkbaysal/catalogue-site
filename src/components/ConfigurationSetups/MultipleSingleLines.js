import React from 'react'
import { FormControl, TextField } from '@mui/material'

function MultipleSingleLines({ option, handleOptionChange, setCurrentInputs, optionIndex, lineCount }) {
    if (lineCount<0){lineCount=0};
    const [lineValues,setLineValues] = React.useState(option.optionHasOverride ? option.optionOverride : option.optionDefault);
    function handleLineChange(val,lineIndex){
        console.log(val,lineIndex);
        setLineValues((oldValues)=>{
            let newValues = [];
            oldValues.forEach((line,index)=>{
                if(index === lineIndex){
                    newValues.push(val);
                }
                else{
                    newValues.push(line);
                }
            })
            console.log(newValues);
            return newValues;
           
        })
    }
    let displayFields = [];
    function buildDisplayFields(){
        for(let i = 0; i<lineCount;i++){
            displayFields.push(
            <TextField
                size="small"
                label={option.optionPlaceholder[i]}
                className="input-field"
                value={lineValues[i]}
                onChange={(e) => {handleLineChange(e.target.value,i)}} />
                )
        }
    }

    React.useEffect(()=>{buildDisplayFields()},[lineCount])
    React.useEffect(()=>{handleOptionChange(lineValues,setCurrentInputs,optionIndex)},[lineValues])
    return (
        <div className='option-container'>
            <h3 className="config-sub-head">{option.optionName}:</h3>
            <div className="config-sub-text">{option.optionText}</div>
            <FormControl className="form-control" size="small">
                <TextField
                    size="small"
                    label={option.optionPlaceholder[0]}
                    className="input-field"
                    value={lineValues[0]}
                    onChange={(e) => {handleLineChange(e.target.value,0)}} />
                <TextField
                    size="small"
                    label={option.optionPlaceholder[1]}
                    className="input-field"
                    value={lineValues[1]}
                    onChange={(e) => {handleLineChange(e.target.value,1)}} />
            </FormControl>
        </div >
    )
}

export default MultipleSingleLines