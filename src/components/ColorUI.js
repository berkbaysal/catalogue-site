import React from 'react'
import "../css/ColorUI.scss"
import { CustomPicker } from "react-color"
import { changeColors } from '../features/color';
import { useSelector, useDispatch } from "react-redux"
var convert = require("color-convert");


function ColorUI(props) {

    var { Saturation, Hue } = require('react-color/lib/components/common');
    const colors = useSelector((state) => state.colors.value)
    const activeColorPicker = useSelector((state) => state.activeColorPicker.value)
    const dispatch = useDispatch();

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

        let colorHex;
        if (color.source === "hsl") {
            colorHex = "#" + convert.hsl.hex(color.h, color.s * 100, color.l * 100);
        }
        else {
            colorHex = "#" + convert.hsv.hex(color.h, color.s * 100, color.v * 100);
        }
        dispatch(changeColors({label: colors[props.index].label, color:color, colorHex:colorHex}))

    }
    return (
        <div className='color-picker-container' style={activeColorPicker===colors[props.index].label ? {padding: "0.8rem"} : { height: "0", padding: "0" }}>
            {activeColorPicker===colors[props.index].label && <><div className="saturation-container">
                <Saturation {...props} onChange={handleChange} pointer={customPointer} />
            </div><div className='hue-container'>
                    <Hue {...props} direction="vertical" onChange={handleChange} pointer={customSlider} />
                </div></>}
        </div>
    )
}

export default CustomPicker(ColorUI)