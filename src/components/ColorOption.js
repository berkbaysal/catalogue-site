import React from 'react'
import "../css/ColorOption.scss"

function ColorOption({label,colorValue,setColors}) {

  function handleChange(e){
    let newColors = [];
    setColors((oldColors) => {
      oldColors.forEach(color=>{
        if(color.label === label){
          let newVal = e.target.value;
          if(e.target.value === ""){
            newVal = "#";
          }
          else if(e.target.value[0] !== "#"){
            newVal = "#" + e.target.value;
          }
          else if(e.target.value.length > 7){
            newVal = e.target.value.slice(0,7);
          }
          newColors.push({label:label,colorValue:newVal})
        }
        else{
          newColors.push(color);
        }
      })
      return newColors;
    })
  }

  return (
    <div className='color-option'>
        <div className="color-display" style={{backgroundColor: colorValue}}></div>
        <div className="color-info">
            <div className="color-label">{label}</div>
            <input className="color-code" value={colorValue} onChange={handleChange}></input>
        </div>
    </div>
  )
}

export default ColorOption