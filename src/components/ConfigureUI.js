import React from 'react'
import "../css/ConfigureUI.scss"
import SliderConfig from './ConfigurationSetups/SliderConfig';
import SingleLineText from './ConfigurationSetups/SingleLineText';
import Button from './Button';
import ComponentCatalogue from '../data/ComponentCatalogue';
import { useSelector, useDispatch } from "react-redux"
import { updateLayoutItem, deleteLayoutItem } from "../features/layout"
import { displayConfigurationForItem, resetActiveConfiguration, changeSelectedStyle, changeSelectedType } from "../features/activeConfiguration"

// activeComponent={activeConfigure.layoutObject}
// activeIndex={activeConfigure.index}
// setActiveConfigure={setActiveConfigure}

function ConfigureUI() {

    const layout = useSelector((state) => state.layout.value)
    const activeConfiguration = useSelector((state) => state.activeConfiguration.value);
    const dispatch = useDispatch();
    let activeComponent = activeConfiguration.currentDisplayObject;
    let activeIndex = activeConfiguration.index;


    let originalOptions = activeComponent.options.map((item) => ({ ...item }));
    const [currentInputs, setCurrentInputs] = React.useState({ ...activeComponent, options: [...originalOptions] });

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

    const displayTypes = activeConfiguration.availableTypes.map(item => (<option key={item}>{item}</option>))
    const displayStyles = activeConfiguration.availableStyles.map(item => (<option key={item}>{item}</option>))

    function setConfigToItem(itemName) {
        let catalogueItem = ComponentCatalogue.filter(item => item.componentName === itemName)[0];
        originalOptions = catalogueItem.options.map((item) => ({ ...item }));
        setCurrentInputs(() => ({ ...catalogueItem, options: [...originalOptions] }));
    }

    function cancelConfig() {
        setCurrentInputs(activeComponent);
        dispatch(resetActiveConfiguration());
    }
    function saveConfig() {
        dispatch(updateLayoutItem({ index: activeIndex, updatedItem: currentInputs }));
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
        dispatch(deleteLayoutItem({ index: activeIndex }));
        cancelConfig();
    }

    React.useEffect(() => {
        setCurrentInputs({ ...activeComponent, options: [...originalOptions] });
    }, [activeConfiguration.currentDisplayObject])
    return (
        <div className="configuration-menu-container">
            <div className="configuration-dropdown-section">
                <div className="type-configuration-dropdown">
                    <h3 className="config-sub-head">Type:</h3>
                    <select className='configuration-dropdown' onChange={(e)=>{dispatch(changeSelectedType(e.target.value))}} value={activeConfiguration.selectedType} id="type-selector">
                        {displayTypes}
                    </select>
                </div>
                <div className="style-configuration-dropdown">
                    <h3 className="config-sub-head">Style:</h3>
                    <select className='configuration-dropdown' onChange={(e)=>{dispatch(changeSelectedStyle(e.target.value))}} value={activeConfiguration.selectedStyle} id="style-selector">
                        {activeConfiguration.selectedStyle === null && <option value="" selected>Choose a style.</option>}
                        {displayStyles}
                    </select >
                </div>
            </div>
            {activeConfiguration.selectedStyle === null ? "" : componentSettings}
            {activeConfiguration.selectedStyle !== null && <div className="configuration-static-buttons">
                <div className="half-button" onClick={cancelConfig}><Button label="Cancel" /></div>
                <div className="half-button" onClick={saveConfig}><Button label="Save" /></div>
            </div>}
            {(activeComponent.componentCategory !== "Navigation" && activeComponent.componentCategory !== "Footer" && activeConfiguration.selectedStyle !== null) &&
                <div className='configuration-delete-button'>
                    <div className='wrapper' onClick={deleteComponent}><Button label="Delete Component" /></div>
                </div>}
        </div>
    )
}

export default ConfigureUI