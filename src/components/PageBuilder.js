import React from 'react'
import AbletonNavbar from "../components/Component Templates/Ableton/components/Navbar";
import { useSelector } from "react-redux";


function PageBuilder(props) {
    const layout = useSelector((state) => state.layout.value)
    const [layoutJsx, setLayoutJsx] = React.useState([]);

    function updateLayoutJsx(layout) {
        let newLayoutJsx = [];
        layout.forEach((component,index) => {
            switch (component.componentName) {
                case "Ableton Style Navigation Menu":
                    let componentProps = [];
                    component.options.forEach((option) => {
                        componentProps[option.optionProp] = option.optionOverride;
                    })
                    newLayoutJsx.push(<AbletonNavbar {...componentProps} key={component.componentName + index}/>)
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