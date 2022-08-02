import { createSlice } from "@reduxjs/toolkit"
import ColorPalette from '../data/ColorPalette'


export const colorsSlice = createSlice({
    name: "colors",
    initialState: { value: ColorPalette },
    reducers: {
        changeColors: (state, action) => {
            let updatedColors = [];
            state.value.forEach(color => {
                if (color.label === action.payload.label) {
                    updatedColors.push({
                        label: action.payload.label,
                        color: action.payload.color,
                        colorHex: action.payload.colorHex
                    })
                }
                else{
                    updatedColors.push(color)
                }
            })
            state.value = updatedColors;
        },
        resetDefaultColors: (state,action) => {
            state.value = ColorPalette;
        }
    }
})

export const { changeColors, resetDefaultColors } = colorsSlice.actions;
export default colorsSlice.reducer;