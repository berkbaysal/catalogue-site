//require('file-loader?name=[name].[ext]!./index.html')
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss"
import App from "./App";
import { configureStore } from "@reduxjs/toolkit/";
import { Provider } from "react-redux";
import colorsReducer from "./features/color"
import layoutReducer from "./features/layout";
import activeColorPickerReducer from "./features/activeColorPicker";
import activeConfigurationReducer from "./features/activeConfiguration";

const store = configureStore({
    reducer: {
        colors: colorsReducer,
        layout: layoutReducer,
        activeColorPicker: activeColorPickerReducer,
        activeConfiguration: activeConfigurationReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);