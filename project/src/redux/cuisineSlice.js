import { createSlice } from "@reduxjs/toolkit";

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState: {
        cuisines: []
    },
    reducers: {
        filterCuisines(state, action){
            state.cuisines.push(action.payload);
        },
    }

});

export const {filterCuisines} = cuisineSlice.actions;

export default cuisineSlice.reducer;