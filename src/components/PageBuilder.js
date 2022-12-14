import React from 'react'
import AbletonNavbar from "../components/Component Templates/Ableton/components/Navbar";
import AbletonVideobox from "../components/Component Templates/Ableton/components/Videobox";
import AbletonFooter from "../components/Component Templates/Ableton/components/Footer"
import AbletonHero from "../components/Component Templates/Ableton/components/Hero"
import AbletonTwoImage from "../components/Component Templates/Ableton/components/TwoImages";
import AbletonThreeImage from "../components/Component Templates/Ableton/components/ThreeImages";
import AbletonCard from "../components/Component Templates/Ableton/components/Card";
import AbletonInfobox from "../components/Component Templates/Ableton/components/Infobox";
import BonsaiNavbar from "../components/Component Templates/Bonsai/components/Navbar"
import BonsaiHero from "../components/Component Templates/Bonsai/components/Hero"
import BonsaiFAQ from "../components/Component Templates/Bonsai/components/FAQ"
import BonsaiFooter from "../components/Component Templates/Bonsai/components/Footer"
import BonsaiReview from "../components/Component Templates/Bonsai/components/Review"
import BonsaiPrice from "../components/Component Templates/Bonsai/components/PricingDisplay"
import { useSelector } from "react-redux";


function PageBuilder(props) {
    const layout = useSelector((state) => state.layout.value)
    const [layoutJsx, setLayoutJsx] = React.useState([]);

    function updateLayoutJsx(layout) {
        let newLayoutJsx = [];
        layout.forEach((component, index) => {
            let componentProps = [];
            component.options.forEach((option) => {
                componentProps[option.optionProp] = option.optionHasOverride ? option.optionOverride : option.optionDefault;
            })
            switch (component.componentName) {
                case "Ableton Style Navigation Menu":
                    newLayoutJsx.push(<AbletonNavbar {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Video Player":
                    newLayoutJsx.push(<AbletonVideobox {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Footer":
                    newLayoutJsx.push(<AbletonFooter {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Hero Section":
                    newLayoutJsx.push(<AbletonHero {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Two Images":
                    newLayoutJsx.push(<AbletonTwoImage {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Three Images":
                    newLayoutJsx.push(<AbletonThreeImage {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Card":
                    newLayoutJsx.push(<AbletonCard {...componentProps} key={component.componentName + index} />)
                    break;
                case "Ableton Style Infobox":
                    newLayoutJsx.push(<AbletonInfobox {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style Navigation Menu":
                    newLayoutJsx.push(<BonsaiNavbar {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style Hero Section":
                    newLayoutJsx.push(<BonsaiHero {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style FAQ":
                    newLayoutJsx.push(<BonsaiFAQ {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style Footer":
                    newLayoutJsx.push(<BonsaiFooter {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style Review":
                    newLayoutJsx.push(<BonsaiReview {...componentProps} key={component.componentName + index} />)
                    break;
                case "Bonsai Style Price Plans":
                    newLayoutJsx.push(<BonsaiPrice {...componentProps} key={component.componentName + index} />)
                    break;
                default:
                    break;
            }
        })
        setLayoutJsx(() => (newLayoutJsx))
    }

    React.useEffect(() => { updateLayoutJsx(layout) }, [layout])

    return (
        <>{layoutJsx}</>
    )
}

export default PageBuilder