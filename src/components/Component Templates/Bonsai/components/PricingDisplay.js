import { Switch } from '@mui/material';
import React from 'react'
import "../css/PricingDisplay.scss"
import PricingUnit from "./PricingUnit";

const content = [["Starter", "Ideal for freelancers and contractors just starting out.", "24", "17", "All Templates", "Unlimited Clients & Projects", "Invoicing & Payments", "Proposals & Contracts", "Tasks & Time Tracking", "Client CRM", "Expense Tracking", "Up to 5 Project Collaborators"],
["Professional", "Everything a growing independent business needs to thrive.", "39", "32", "Everything in Starter plus...", "Custom Branding", "Forms & Questionnaires", "Workflow Automations", "Client Portal", "Calendly Integration", "Zapier Integration", "Up to 15 Project Collaborators"],
["Business", "The perfect package for small businesses and agencies.", "79", "52", "Everything in Starter and Professional plus...", "Subcontractor Management", "Hiring Agreement Templates (1099 contracts)", "Subcontractor Onboarding", "Talent Pool", "3 Team Seats (additional seats $9/month)", "Accountant Access", "Connect Multiple Bank Accounts", "Unlimited Subcontractors","Unlimited Project Collaborators"]
];

function PricingDisplay(props) {
    let unitCount = 3;
    let promotedIndex=-1;
    if(props.promotedCard){
        promotedIndex=props.promotedCard-1;
    }
    if (props.unitCount) {
        unitCount = props.unitCount;
    }
    const [yearly, setYearly] = React.useState(false);
    const unitList = []

    for (let i = 0; i < unitCount; i++) {
        unitList.push(<div className="pricing-unit"><PricingUnit content={content[i]} yearly={yearly} promoted={promotedIndex===i?true:false}/></div>)
    }

    function switchToggle(e){
        setYearly((oldState)=>(!oldState))
    }

    return (
        <div className='bonsai-style'>
            <div className="price-display-container">
                <div className="heading-container">
                    <div className="heading">Plans & Pricing</div>
                    <div className="switch-group">
                        monthly
                        <Switch onChange={switchToggle}/>
                        yearly
                    </div>

                </div>
                <div className="unit-container">
                    {unitList}
                </div>
            </div>
        </div>
    )
}

export default PricingDisplay