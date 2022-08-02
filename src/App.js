import React from "react"
import Configure from "./components/Configure";
import { configureStore } from "@reduxjs/toolkit";
import { Fab } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import PageBuilder from "./components/PageBuilder";


function App() {
    const [settingsMenuOpen, setSettingsMenuOpen] = React.useState(true);

    function toggleSettingsMenu() {
        setSettingsMenuOpen((currentState) => (!currentState));
    }
    return (
        <div className="app-container">
            <Fab size="medium" color={settingsMenuOpen ? "error" : "primary"} className="config-fab-button" onClick={toggleSettingsMenu}>
                {settingsMenuOpen && <CloseIcon fontSize="medium" />}
                {!settingsMenuOpen && <SettingsIcon fontSize="medium" />}
            </Fab>
            {settingsMenuOpen && <Configure />}
            <div className="page-builder-section" style={settingsMenuOpen ? {display:"none"}:{visibility:"unset"}}>
                <PageBuilder />
            </div>
        </div>);
}

export default App;