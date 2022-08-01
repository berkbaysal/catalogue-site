import React from 'react'
import "../css/ConfigureUI.scss"
import SliderConfig from './ConfigurationSetups/SliderConfig';
import SingleLineText from './ConfigurationSetups/SingleLineText';
import Button from './Button';

function ConfigureUI({ activeComponent, setLayout, setActiveConfigure, activeIndex }) {


    const [currentInputs, setCurrentInputs] = React.useState(activeComponent);


    function cancelConfig(){
        setActiveConfigure({ object: null, index: null })
    }
    function saveConfig(){
        let newLayout = [];
        setLayout((oldLayout)=>{
            oldLayout.forEach((item,index)=>{
                if(index===activeIndex){
                    newLayout.push(currentInputs);
                }
                else{
                    newLayout.push(item);
                }
            })
            return(newLayout)
        })
        cancelConfig();
    }
    const componentSettings = activeComponent.options.map((option, index) => {
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


    function handleOptionChange(e, setCurrentInputs, optionIndex) {
        setCurrentInputs((oldObj) => {
            let newOptions = [...oldObj.options];
            newOptions[optionIndex].optionOverride = e.target.value;
            newOptions[optionIndex].optionHasOverride = true;
            return { ...oldObj, options: newOptions };
        })
    }
    return (
        <div className="configuration-menu-container">
            <div className="configuration-dropdown-section">
                <div className="type-configuration-dropdown">
                    <h3 className="config-sub-head">Type:</h3>
                    <select className='configuration-dropdown'>
                        <option>{activeComponent.componentCategory}</option>
                    </select>
                </div>
                <div className="style-configuration-dropdown">
                    <h3 className="config-sub-head">Style:</h3>
                    <select className='configuration-dropdown'>
                        <option>{activeComponent.componentName}</option>
                    </select >
                </div>
            </div>
            {componentSettings}
            <div className="configuration-static-buttons">
                <div className="half-button" onClick={cancelConfig}><Button label="Cancel"/></div>
                <div className="half-button" onClick={saveConfig}><Button label="Save"/></div>
            </div>
        </div>
    )
}

export default ConfigureUI