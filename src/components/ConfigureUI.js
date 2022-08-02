import React from 'react'
import "../css/ConfigureUI.scss"
import SliderConfig from './ConfigurationSetups/SliderConfig';
import SingleLineText from './ConfigurationSetups/SingleLineText';
import Button from './Button';
import ComponentCatalogue from '../data/ComponentCatalogue';
import { useSelector, useDispatch } from "react-redux"
import { setLayout, updateLayoutItem, deleteLayoutItem } from "..//features/layout"

function ConfigureUI({ activeComponent, setActiveConfigure, activeIndex }) {

    const layout = useSelector((state) => state.layout.value)
    const dispatch = useDispatch();

    let originalOptions = activeComponent.options.map((item, index) => ({ ...item }));
    const [currentInputs, setCurrentInputs] = React.useState({ ...activeComponent, options: [...originalOptions] });
    const [filteredTypes, setFilteredTypes] = React.useState([]);
    const [filteredStyles, setFilteredStyles] = React.useState([]);
    const [selectedStyle, setSelectedStyle] = React.useState(activeComponent.componentName);
    const [selectedType, setSelectedType] = React.useState(activeComponent.componentCategory);

    const componentSettings = currentInputs.options.map((option, index) => {
        switch (option.optionType) {
            case ("url"):
                return <SingleLineText
                    option={option}
                    key={"option-" + index}
                    optionIndex={index}
                    handleOptionChange={handleOptionChange}
                    setCurrentInputs={setCurrentInputs} />
            case ("slider"):
                return <SliderConfig
                    option={option}
                    key={"option-" + index}
                    optionIndex={index}
                    handleOptionChange={handleOptionChange}
                    setCurrentInputs={setCurrentInputs} />
        }


    })


    function updateFilteredTypes() {
        let newTypeJsxList = [];
        let newTypeStringList = [];
        if (["Navigation", "Footer"].includes(activeComponent.componentCategory)) {
            newTypeJsxList.push(<option>{activeComponent.componentCategory}</option>);
            newTypeStringList.push(activeComponent.componentCategory);
        }
        else {
            ComponentCatalogue.forEach(item => {
                if (!["Navigation", "Footer"].includes(item.componentCategory)) {
                    if (!newTypeStringList.includes(item.componentCategory)) {
                        newTypeJsxList.push(<option key={item.componentCategory}>{item.componentCategory}</option>)
                        newTypeStringList.push(item.componentCategory)
                    }
                }
            })
        }
        setFilteredTypes(() => ({ jsx: newTypeJsxList, string: newTypeStringList }));
    }
    function updateFilteredStyles() {
        let newStyleJsxList = [];
        let newStyleStringList = [];
        ComponentCatalogue.forEach(item => {
            if (item.componentCategory === selectedType) {
                newStyleJsxList.push(<option key={item.componentName}>{item.componentName}</option>)
                newStyleStringList.push(item.componentName);
            }
        })
        setFilteredStyles(() => ({ jsx: newStyleJsxList, string: newStyleStringList }))
    }

    function handleSelectChange(e) {
        if (e.target.id === "style-selector") {
            setSelectedStyle(e.target.value);
            setConfigToItem(e.target.value);
            
        }
        if (e.target.id === "type-selector") {
            setSelectedType(e.target.value);
            setSelectedStyle(null)
        }
    }

    function setConfigToItem(itemName) {
        let catalogueItem = ComponentCatalogue.filter(item => item.componentName === itemName)[0];
        originalOptions = catalogueItem.options.map((item) => ({ ...item }));
        setCurrentInputs(() => ({ ...catalogueItem, options: [...originalOptions] }));
    }

    function cancelConfig() {
        setCurrentInputs(activeComponent);
        setActiveConfigure({ layoutObject: null, index: null })
    }
    function saveConfig() {
        dispatch(updateLayoutItem({index:activeIndex, updatedItem:currentInputs}));
        cancelConfig();
    }

    function handleOptionChange(e, setCurrentInputs, optionIndex) {
        setCurrentInputs((oldObj) => {
            let newOptions = [...oldObj.options];
            newOptions[optionIndex].optionOverride = e.target.value;
            newOptions[optionIndex].optionHasOverride = true;
            return { ...oldObj, options: newOptions };
        })
    }

    function deleteComponent() {
        dispatch(deleteLayoutItem({index:activeIndex}));
        cancelConfig();
    }

    React.useEffect(() => {
        setCurrentInputs({ ...activeComponent, options: [...originalOptions] })
        updateFilteredTypes()
        updateFilteredStyles()
        setSelectedStyle(activeComponent.componentName)
        setSelectedType(activeComponent.componentCategory)
    }, [activeComponent])
    React.useEffect(() => {
        updateFilteredStyles()
    }, [selectedType])

    console.log(selectedType,selectedStyle)
    return (
        <div className="configuration-menu-container">
            <div className="configuration-dropdown-section">
                <div className="type-configuration-dropdown">
                    <h3 className="config-sub-head">Type:</h3>
                    <select className='configuration-dropdown' onChange={handleSelectChange} value={selectedType} id="type-selector">
                        {filteredTypes.jsx}
                    </select>
                </div>
                <div className="style-configuration-dropdown">
                    <h3 className="config-sub-head">Style:</h3>
                    <select className='configuration-dropdown' onChange={handleSelectChange} value={selectedStyle} id="style-selector">
                        {selectedStyle===null && <option value = "" selected>Choose a style.</option> }
                        {filteredStyles.jsx}
                    </select >
                </div>
            </div>
            {selectedStyle===null?"":componentSettings}
            {selectedStyle !== null &&<div className="configuration-static-buttons">
                <div className="half-button" onClick={cancelConfig}><Button label="Cancel" /></div>
                <div className="half-button" onClick={saveConfig}><Button label="Save" /></div>
            </div>}
            {(activeComponent.componentCategory !== "Navigation" && activeComponent.componentCategory !== "Footer" && selectedStyle!==null) &&
                <div className='configuration-delete-button'>
                    <div className='wrapper' onClick={deleteComponent}><Button label="Delete Component" /></div>
                </div>}
        </div>
    )
}

export default ConfigureUI