import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
    name: 'time',
    initialState: {
        timeState: false
    },
    reducers: {
        setTime(state, action){
            state.timeState = action.payload;
        }
    }
});

export const {setTime} = timeSlice.actions;
export default timeSlice.reducer;