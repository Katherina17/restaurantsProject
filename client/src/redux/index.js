import {configureStore} from '@reduxjs/toolkit';
import cuisineReducer from './cuisineSlice';
import timeReducer from './timeSlice';
import dishReducer from './dishSlice';

export default configureStore({
    reducer: {
        cuisine: cuisineReducer,
        time: timeReducer,
        dishes: dishReducer
    }
});

