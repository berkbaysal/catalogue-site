import React from 'react'
import AbletonNavbar from "../components/Component Templates/Ableton/components/Navbar";
import AbletonVideobox from "../components/Component Templates/Ableton/components/Videobox";
import AbletonFooter from "../components/Component Templates/Ableton/components/Footer"
import AbletonHero from "../components/Component Templates/Ableton/components/Hero"
import AbletonTwoImage from "../components/Component Templates/Ableton/components/TwoImages";
import AbletonThreeImage from "../components/Component Templates/Ableton/components/ThreeImages";
import { useSelector } from "react-redux";


function PageBuilder(props) {
    const layout = useSelector((state) => state.layout.value)
    const [layoutJsx, setLayoutJsx] = React.useState([]);

    function updateLayoutJsx(layout) {
        let newLayoutJsx = [];
        layout.forEach((component, index) => {
            let componentProps = [];
            component.options.forEach((option) => {
                componentProps[option.optionProp] = option.optionOverride;
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