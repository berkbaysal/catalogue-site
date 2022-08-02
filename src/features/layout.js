import { createSlice } from "@reduxjs/toolkit"
import ComponentCatalogue from '../data/ComponentCatalogue';

const DefaultLayoutSetup = ["ableton-style-navigation-menu", "ableton-style-video-player", "ableton-style-footer"].map(item => (ComponentCatalogue[item]))

export const layoutSlice = createSlice({
    name: "layout",
    initialState: { value: DefaultLayoutSetup },
    reducers: {
        setLayout: (state,action)=>{
            state.value = action.payload;
        }
    }
})

export const { setLayout } = layoutSlice.actions;
export default layoutSlice.reducer;