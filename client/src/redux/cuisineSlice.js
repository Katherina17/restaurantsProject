import { createSlice } from "@reduxjs/toolkit";

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState: {
        cuisines: [], 
    },
    reducers: {
        filterCuisines(state, action){
            if(state.cuisines.find(c => c === action.payload)){
                state.cuisines = state.cuisines.filter( c => c !== action.payload)
            } else{
                state.cuisines.push(action.payload)
            }

        }
    }

});

export const {filterCuisines} = cuisineSlice.actions;

export default cuisineSlice.reducer;