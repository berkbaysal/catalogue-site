import React from 'react'
import "../css/ConfigureUI.scss"
import ComponentCatalogue from '../data/ComponentCatalogue';
import URLConfig from './ConfigurationSetups/URLConfig';

function ConfigureUI({ activeComponent }) {

    if (activeComponent === "") {
        return (<h3 className="config-sub-head">Choose or add a component to start configuring.</h3>)
    }

    const componentSettings = activeComponent.options.map((option,index) => {

        switch (option.optionType){
            case ("URL"):
                return <URLConfig option={option} key={"option-" +index}/>
        }
            
        
    })

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
        </div>
    )
}

export default ConfigureUI