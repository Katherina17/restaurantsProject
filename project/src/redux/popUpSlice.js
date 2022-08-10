import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'PopUp',
    initialState: {
        popUpState: false
    },
    reducers: {
        changePopUpState(state, action){
            state.popUpState = action.payload;
            
        }
    }

});

export const {changePopUpState} = popUpSlice.actions;
export default popUpSlice.reducer;