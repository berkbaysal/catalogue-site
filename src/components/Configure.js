import React from 'react'
import "../css/Configure.scss"
import ColorOption from './ColorOption'
import ColorPalette from '../data/ColorPalette'
import DefaultLayoutSetup from '../data/DefaultLayoutSetup'
import Button from './Button';

function Configure() {

    const [colors, setColors] = React.useState(ColorPalette);
    const [activePicker,setActivePicker] = React.useState("");
    const [layout,setLayout] = React.useState(DefaultLayoutSetup);
    const colorsDisplay = colors.map(option => {
        return (
            <ColorOption label={option.label} color={option.color} colorHex = {option.colorHex} setColors={setColors} key={option.label} activePicker={activePicker} setActivePicker={setActivePicker}/>
        )
    })
    const layoutDisplay = layout.map((item,index)=>{
        return(
            <Button label={item.componentName} key={index} addClass="--inactive"/>
        )
    })

    function resetColors(){
        setColors(ColorPalette);
    }
    return (
        <div className="catalogue-configuration">
            <div className="color-config desktop-sizing">
                <h1 className='config-head'>Color Theme:</h1>
                {colorsDisplay}
                <div className="btn-container">
                    <Button label="Reset Default Colors" onClick={resetColors}/>
                </div>
                <div className="footnote">Not all components use all of the colors in the theme. Depending on your configuration, certain colors may not appear in the layout.</div>
            </div>
            <div className="layout-config desktop-sizing">
            <h1 className='config-head'>Current Configuration:</h1>
            <div className="layout-config-navigation">
                <h3 className="config-sub-head">Navigation:</h3>
                {layoutDisplay[0]}
            </div>
            <div className="layout-config-body">
                <h3 className="config-sub-head">Body:</h3>
                {layoutDisplay.slice(1,layoutDisplay.length-1)}
                <Button label="Add New Component"/>
            </div>
            <div className="layout-config-footer">
                <h3 className="config-sub-head">Footer:</h3>
                {layoutDisplay[layoutDisplay.length-1]}
            </div>
            </div>
            <div className="component-config desktop-sizing"></div>
        </div>
    )
}

export default Configure