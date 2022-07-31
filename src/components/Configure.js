import React from 'react'
import "../css/Configure.scss"
import ColorOption from './ColorOption'
import ColorPalette from '../data/ColorPalette'
import Button from './Button';

function Configure() {

    const [colors, setColors] = React.useState(ColorPalette);
    const [activePicker,setActivePicker] = React.useState("");
    console.log(colors);
    const colorsDisplay = colors.map(option => {
        return (
            <ColorOption label={option.label} color={option.color} colorHex = {option.colorHex} setColors={setColors} key={option.label} activePicker={activePicker} setActivePicker={setActivePicker}/>
        )
    })

    return (
        <div className="catalogue-configuration">
            <div className="color-config desktop-sizing">
                <h1 className='config-head'>Color Theme:</h1>
                {colorsDisplay}
                <div className="btn-container">
                    <Button label="Reset Default Colors" />
                </div>
                <div className="footnote">Not all components use all of the colors in the theme. Depending on your configuration, certain colors may not appear in the layout.</div>
            </div>
            <div className="layout-config desktop-sizing"></div>
            <div className="component-config desktop-sizing"></div>
        </div>
    )
}

export default Configure