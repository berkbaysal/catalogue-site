import { createSlice } from "@reduxjs/toolkit"

export const activeColorPickerSlice = createSlice({
    name: "activeColorPicker",
    initialState: { value: "" },
    reducers: {
        changeActiveColorPicker: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { changeActiveColorPicker} = activeColorPickerSlice.actions;
export default activeColorPickerSlice.reducer;