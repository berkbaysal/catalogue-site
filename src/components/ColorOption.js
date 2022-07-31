import React from 'react'
import "../css/ColorOption.scss"
import ColorUI from './ColorUI';

function ColorOption({ label, color, setColors, colorHex, activePicker, setActivePicker }) {

  function handleChange(e) {
    let newColors = [];
    setColors((oldColors) => {
      oldColors.forEach(color => {
        if (color.label === label) {
          let newVal = e.target.value.toUpperCase();
          if (e.target.value === "") {
            newVal = "#";
          }
          else if (e.target.value[0] !== "#") {
            newVal = "#" + e.target.value.toUpperCase();
          }
          else if (e.target.value.length > 7) {
            newVal = e.target.value.slice(0, 7).toUpperCase();
          }
          newColors.push({ label: label, color: newVal, colorHex: newVal })
        }
        else {
          newColors.push(color);
        }
      })
      return newColors;
    })
  }

  function toggleActive() {
    if (activePicker === label) {
      setActivePicker("");
    }
    else {
      setActivePicker(label);
    }
  }

  return (
    <div className='color-option'>
      <div className="simple-ui">
        <div className="color-display" style={{ backgroundColor: colorHex }} onClick={toggleActive}></div>
        <div className="color-info">
          <div className="color-label">{label}</div>
          <input className="color-code" value={colorHex} onChange={handleChange}></input>
        </div>
      </div>
      <div className="detailed-ui">
        <ColorUI color={color} label={label} setColors={setColors} colorHex={colorHex} activePicker={activePicker} />
      </div>
    </div>
  )
}

export default ColorOption