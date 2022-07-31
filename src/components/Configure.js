import React from 'react'
import "../css/Configure.scss"
import ColorOption from './ColorOption'
import ColorPalette from '../data/ColorPalette'

function Configure() {

    const [colors, setColors] = React.useState(ColorPalette);

    const colorsDisplay = colors.map(option=>{
        return(
            <ColorOption label={option.label} colorValue={option.colorValue} setColors={setColors}/>
        )
    })


    return (
        <div className="catalogue-configuration">
            <div className="color-config desktop-sizing">
                {colorsDisplay}
            </div>
            <div className="layout-config desktop-sizing"></div>
            <div className="component-config desktop-sizing"></div>
        </div>
    )
}

export default Configure