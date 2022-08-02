import React from 'react'
import "../css/ColorOption.scss"
import ColorUI from './ColorUI';
import { useSelector, useDispatch } from "react-redux"
import { changeColors } from "../features/color"


function ColorOption({ index, activePicker, setActivePicker }) {


  const colors = useSelector((state) => state.colors.value)
  const dispatch = useDispatch();
  console.log(colors);

  function handleChange(e) {
    let newValue = e.target.value.toUpperCase();
    if (e.target.value === "") {
      newValue = "#";
    }
    else if (e.target.value[0] !== "#") {
      newValue = "#" + e.target.value.toUpperCase();
    }
    else if (e.target.value.length > 7) {
      newValue = e.target.value.slice(0, 7).toUpperCase();
    }
    dispatch(changeColors({label:colors[index].label, color:newValue, colorHex:newValue}));

  }

  function toggleActive() {
    if (activePicker === colors[index].label) {
      setActivePicker("");
    }
    else {
      setActivePicker(colors[index].label);
    }
  }

  return (
    <div className='color-option'>
      <div className="simple-ui">
        <div className="color-display" style={{ backgroundColor: colors[index].colorHex }} onClick={toggleActive}></div>
        <div className="color-info">
          <div className="color-label">{colors[index].label}</div>
          <input className="color-code" value={colors[index].colorHex} onChange={handleChange}></input>
        </div>
      </div>
      <div className="detailed-ui">
        <ColorUI index={index} activePicker={activePicker} {...colors[index]}/>
      </div>
    </div>
  )
}

export default ColorOption