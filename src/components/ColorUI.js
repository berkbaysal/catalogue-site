import React from 'react'
import "../css/ColorUI.scss"
import { CustomPicker } from "react-color"
var convert = require("color-convert");

function ColorUI(props) {

    var { Saturation, Hue, EditableInput } = require('react-color/lib/components/common');

    let pointer = {
        width: '1rem',
        borderRadius: '50%',
        height: '1rem',
        background: '#fff',
        transform: 'translateY(-50%) translateX(-50%)',
        boxShadow: "0.1rem 0.1rem 0.1rem 0.5"
    }
    let slider = { ...pointer, transform: "translateY(-50%) translateX(-25%)" };

    const customPointer = () => { return <div style={pointer} /> };
    const customSlider = () => { return <div style={slider} /> };

    function handleChange(color) {
        let newColors = [];
        let colorHex;
        if (color.source === "hsl") {
            colorHex = "#" + convert.hsl.hex(color.h, color.s * 100, color.l * 100);
        }
        else {
            colorHex = "#" + convert.hsv.hex(color.h, color.s * 100, color.v * 100);
        }

        props.setColors((oldColors) => {
            oldColors.forEach(oldColor => {
                if (oldColor.label === props.label) {
                    newColors.push({ label: props.label, color: color, colorHex: colorHex })
                }
                else {
                    newColors.push(oldColor);
                }
            })
            return newColors;
        })
    }
    return (
        <div className='color-picker-container' style={props.activePicker===props.label ? {padding: "0.8rem"} : { height: "0", padding: "0" }}>
            {props.activePicker===props.label && <><div className="saturation-container">
                <Saturation {...props} onChange={handleChange} pointer={customPointer} />
            </div><div className='hue-container'>
                    <Hue {...props} direction="vertical" onChange={handleChange} pointer={customSlider} />
                </div></>}
        </div>
    )
}

export default CustomPicker(ColorUI)