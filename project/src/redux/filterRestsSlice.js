import descriptionRestraurants from "../main/restaurants/restraurantsList/DescriptionRestraurants";
import { createSlice } from "@reduxjs/toolkit";

let rests = descriptionRestraurants;

const filterRestsSlice = createSlice({
  name: 'restraunt',
  initialState: {rests},
  reducers: {
    filterRests(state,action){
      console.log('hello')
}
    }
})

export const {filterRests} = filterRestsSlice.actions;
export default filterRestsSlice.reducer;