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

export const {filterCuisine} = cuisineSlice.actions;

export default cuisineSlice.reducer;