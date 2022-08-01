import { createSlice } from "@reduxjs/toolkit";
import descriptionRestraurants from "../main/restaurants/restraurantsList/DescriptionRestraurants";

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState: {
        cuisines: [], 
    },
    reducers: {
        filterCuisines(state, action){
            state.cuisines = action.payload;
        }
    }

});

export const {filterCuisines} = cuisineSlice.actions;

export default cuisineSlice.reducer;