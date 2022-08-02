import { createSlice } from "@reduxjs/toolkit"
import ComponentCatalogue from '../data/ComponentCatalogue';

const DefaultLayoutSetup = [ComponentCatalogue[0],ComponentCatalogue[1],ComponentCatalogue[2]];

export const layoutSlice = createSlice({
    name: "layout",
    initialState: { value: DefaultLayoutSetup },
    reducers: {
        setLayout: (state,action)=>{
            state.value = action.payload;
        },
        addNewItemToLayout: (state,action)=>{
            const filteredCatalogue = ComponentCatalogue.filter(item => !["Navigation","Footer"].includes(item.componentCategory));
            let newLayout = state.value.slice(0,state.value.length-1);
            newLayout.push(filteredCatalogue[0]);
            newLayout.push(state.value[state.value.length-1]);
            state.value = newLayout;
        },
        updateLayoutItem: (state,action)=>{
            let  newLayout = [];
            newLayout.push(...state.value.slice(0,action.payload.index));
            newLayout.push(action.payload.updatedItem);
            newLayout.push(...state.value.slice(action.payload.index+1));
            state.value=newLayout;
        },
        deleteLayoutItem: (state,action)=>{
            let  newLayout = [];
            newLayout.push(...state.value.slice(0,action.payload.index));
            newLayout.push(...state.value.slice(action.payload.index+1));
            state.value=newLayout;
        }
    }
})

export const { setLayout, addNewItemToLayout, updateLayoutItem, deleteLayoutItem } = layoutSlice.actions;
export default layoutSlice.reducer;