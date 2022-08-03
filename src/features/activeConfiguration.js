import { createSlice } from "@reduxjs/toolkit"
import ComponentCatalogue from "../data/ComponentCatalogue";

const Initial_State = { layoutObject: null, index: null, selectedType: null, selectedStyle: null, availableTypes:null, availableStyles:null, currentDisplayObject: null };

function getAvailableTypes(category){
    if (["Navigation","Footer"].includes(category)){
        return [category];
    }
    else{
        let typeList = []
        ComponentCatalogue.forEach(item=>{
            if(!["Navigation","Footer"].includes(item.componentCategory) && !typeList.includes(item.componentCategory)){
                typeList.push(item.componentCategory);
            }
        })
        return typeList;
    }
}

function getAvailableStyles(category){
    let styleList = []
    ComponentCatalogue.forEach(item=>{
        if(item.componentCategory === category){
            styleList.push(item.componentName);
        }
    })
    return styleList;
}

export const activeConfigurationSlice = createSlice({
    name: "activeConfiguration",
    initialState: { value: Initial_State },
    reducers: {
        displayConfigurationForItem: (state, action) => {
            state.value={
                layoutObject: action.payload.layoutObject,
                index: action.payload.index,
                selectedType: action.payload.layoutObject.componentCategory,
                selectedStyle: action.payload.layoutObject.componentName,
                availableTypes: getAvailableTypes(action.payload.layoutObject.componentCategory),
                availableStyles: getAvailableStyles(action.payload.layoutObject.componentCategory),
                currentDisplayObject: action.payload.layoutObject
            }
        },
        resetActiveConfiguration: (state,action) =>{
            state.value  = Initial_State;
        },
        changeSelectedStyle: (state,action) =>{
            let isSelectedOriginal = action.payload === state.value.layoutObject.componentName;
            state.value={
                ...state.value,
                selectedStyle: action.payload,
                currentDisplayObject: (isSelectedOriginal ? state.value.layoutObject:ComponentCatalogue.filter(item=>(item.componentName === action.payload))[0])
            }
        },
        changeSelectedType: (state,action) =>{
            let isSelectedOriginal = action.payload === state.value.layoutObject.componentCategory;
            state.value={
                ...state.value,
                selectedType: action.payload,
                selectedStyle: (isSelectedOriginal ? state.value.layoutObject.componentName: getAvailableStyles()[0]),
                availableStyles: getAvailableStyles(action.payload),
                currentDisplayObject: (isSelectedOriginal ? state.value.layoutObject:ComponentCatalogue.filter(item=>(item.componentCategory === action.payload))[0])
            }
        },
        changeIndexOfItem: (state,action)=>{
            state.value={...state.value, index:action.payload}
        }
    }
})

export const { displayConfigurationForItem, resetActiveConfiguration,changeSelectedStyle, changeSelectedType, changeIndexOfItem} = activeConfigurationSlice.actions;
export default activeConfigurationSlice.reducer;