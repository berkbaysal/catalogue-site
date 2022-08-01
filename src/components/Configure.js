import React from 'react'
import "../css/Configure.scss"
import ColorOption from './ColorOption'
import ColorPalette from '../data/ColorPalette'
import Button from './Button';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import ConfigureUI from './ConfigureUI'
import ComponentCatalogue from '../data/ComponentCatalogue';

function Configure() {
    const DefaultLayoutSetup = ["ableton-style-navigation-menu", "ableton-style-video-player", "ableton-style-footer"]
    const [colors, setColors] = React.useState(ColorPalette); //Data of color configuration
    const [activePicker, setActivePicker] = React.useState(""); //Data for color picker UI
    const [layout, setLayout] = React.useState(DefaultLayoutSetup.map(item => (ComponentCatalogue[item]))); //Data of currently selected layout
    const [activeConfigure, setActiveConfigure] = React.useState({ layoutObject: null, index: null }) //Index of the element in layout currently being configured
    const colorsDisplay = colors.map(option => {
        return (
            <ColorOption label={option.label} color={option.color} colorHex={option.colorHex} setColors={setColors} key={option.label} activePicker={activePicker} setActivePicker={setActivePicker} />
        )
    })
    const layoutDisplay = layout.map((item, index) => {
        return (
            <Button label={item.componentName} key={index} addClass="--inactive" />
        )
    })

    function resetColors() {
        setColors(ColorPalette);
    }

    function handleOnDragEnd(e) {
        if (!e.destination) return;
        const items = Array.from(layout);
        const [reordered] = items.splice(e.source.index, 1);
        items.splice(e.destination.index, 0, reordered);
        setLayout(items);

    }
    function handleClick(index) {
        setActiveConfigure({ layoutObject: layout[index], index: index });
    }
    return (
        <div className="catalogue-configuration">
            <div className="color-config desktop-sizing">
                <h1 className='config-head'>Color Theme:</h1>
                {colorsDisplay}
                <div className="btn-container">
                    <Button label="Reset Default Colors" onClick={resetColors} />
                </div>
                <div className="footnote">Not all components use all of the colors in the theme. Depending on your configuration, certain colors may not appear in the layout.</div>
            </div>
            <div className="layout-config desktop-sizing">
                <h1 className='config-head'>Current Configuration:</h1>
                <div className="layout-config-navigation">
                    <h3 className="config-sub-head">Navigation:</h3>
                    <div className="wrapper" onClick={(e) => { handleClick(0) }}>
                        {<Button label={layout[0].componentName}
                            key={0} addClass={0 === activeConfigure.index ? "--configuring" : "--inactive"} />}</div>
                </div>
                <div className="layout-config-body">
                    <h3 className="config-sub-head">Body:</h3>
                    <DragDropContext onDragEnd={handleOnDragEnd}> {/*DRAGABLE ZONE STARTS HERE*/}
                        <Droppable droppableId='body-list'>
                            {(provided) => (
                                <div className='body-list-drop-area' {...provided.droppableProps} ref={provided.innerRef}>
                                    {layout.map((item, index) => {
                                        if (index === 0 || index === layoutDisplay.length - 1) {  //ignore footer/nav
                                            return;
                                        }
                                        return (
                                            <Draggable key={item.componentName + index.toString()} draggableId={item.componentName + index.toString()} index={index}>
                                                {(provided) => (
                                                    <div className='dragable-button'{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} id={index} onClick={(e) => { handleClick(index) }}>
                                                        {<Button
                                                            label={item.componentName}
                                                            key={index}
                                                            addClass={index === activeConfigure.index ? "--configuring" : "--inactive"} />}
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext> {/*DRAGABLE ZONE ENDS HERE*/}
                    <Button label="Add New Component" />
                </div>
                <div className="layout-config-footer">
                    <h3 className="config-sub-head">Footer:</h3>
                    <div className="wrapper" onClick={(e) => { handleClick(layoutDisplay.length - 1) }}>{<Button label={layout[layoutDisplay.length - 1].componentName} key={layoutDisplay.length - 1} addClass={layoutDisplay.length - 1 === activeConfigure.index ? "--configuring" : "--inactive"} />}</div>
                </div>
                <div className="footnote">You can re-arrange body components by dragging and dropping. You can edit or remove each individual component by clicking on it and opening the configuration menu.
                    <br /><br />Note: You must have a footer and a navigation menu.</div>
            </div>
            <div className="component-config desktop-sizing">
                <h1 className='config-head'>Current Configuration:</h1>
                {/* <h3 className="config-sub-head">Choose or add a component to start configuring.</h3> */}
                {activeConfigure.layoutObject && <ConfigureUI
                    activeComponent={activeConfigure.layoutObject}
                    activeIndex={activeConfigure.index}
                    setLayout={setLayout}
                    setActiveConfigure={setActiveConfigure} />}
                {!activeConfigure.layoutObject && <h3 className="config-sub-head">Choose or add a component to start configuring.</h3>}
            </div>
        </div>
    )
}

export default Configure