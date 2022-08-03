import React from "react"
import Configure from "./components/Configure";
import { configureStore } from "@reduxjs/toolkit";
import { Fab } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import PageBuilder from "./components/PageBuilder";
import PaletteIcon from '@mui/icons-material/Palette';


function App() {
    const [settingsMenuOpen, setSettingsMenuOpen] = React.useState(true);
    const [colorMenuActive,setColorMenuActive] = React.useState(false);

    function toggleSettingsMenu() {
        if(settingsMenuOpen){setColorMenuActive(false)}
        setSettingsMenuOpen((currentState) => (!currentState));
    }
    function toggleColorSlider(){
        setColorMenuActive((oldState)=>(!oldState))
    }
    return (
        <div className="app-container">
            <Fab size="medium" color={settingsMenuOpen ? "error" : "primary"} className="config-fab-button" onClick={toggleSettingsMenu}>
                {settingsMenuOpen && <CloseIcon fontSize="medium" />}
                {!settingsMenuOpen && <SettingsIcon fontSize="medium" />}
            </Fab>
            {settingsMenuOpen && <Fab size="medium" color="primary" className="color-fab-button" onClick={toggleColorSlider}>
                <PaletteIcon fontSize="medium" />
            </Fab>}
            {colorMenuActive && <div className="config-overlay"></div>}
            {settingsMenuOpen && <Configure colorMenuActive={colorMenuActive}/>}
            <div className="page-builder-section" style={settingsMenuOpen ? { display: "none" } : { visibility: "unset" }}>
                <PageBuilder />
            </div>
        </div>);
}

export default App;