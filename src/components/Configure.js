import React from 'react'
import "../css/Configure.scss"
import ColorOption from './ColorOption'
import ColorPalette from '../data/ColorPalette'
import DefaultLayoutSetup from '../data/DefaultLayoutSetup'
import Button from './Button';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

function Configure() {

    const [colors, setColors] = React.useState(ColorPalette);
    const [activePicker, setActivePicker] = React.useState("");
    const [layout, setLayout] = React.useState(DefaultLayoutSetup);
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
        console.log(items);
        setLayout(items);

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
                    {<Button label={layout[0].componentName} key={0} addClass="--inactive" />}
                </div>
                <div className="layout-config-body">
                    <h3 className="config-sub-head">Body:</h3>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
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
                                                    <div className='dragable-button'{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} id={index} >
                                                        {<Button label={item.componentName} key={index} addClass="--inactive" />}
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <Button label="Add New Component" />
                </div>
                <div className="layout-config-footer">
                    <h3 className="config-sub-head">Footer:</h3>
                    {<Button label={layout[layoutDisplay.length - 1].componentName} key={layoutDisplay.length - 1} addClass="--inactive" />}
                </div>
            </div>
            <div className="component-config desktop-sizing"></div>
        </div>
    )
}

export default Configure