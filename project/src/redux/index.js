import {configureStore} from '@reduxjs/toolkit';
import cuisineReducer from './cuisineSlice';
import timeReducer from './timeSlice';

export default configureStore({
    reducer: {
        cuisine: cuisineReducer,
        time: timeReducer,
    }
});

