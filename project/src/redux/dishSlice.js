import { createSlice } from "@reduxjs/toolkit";

const dishSlice = createSlice({
    name: 'dishes',
    initialState: {
        dishState: ' '
    },
    reducers: {
        changeDishState(state, action){
            state.dishState = action.payload;
        }
    }
})

export const {changeDishState} = dishSlice.actions;
export default dishSlice.reducer;