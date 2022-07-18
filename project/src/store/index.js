import {configureStore} from '@reduxjs/toolkit';
import cuisineReducer from './cuisineSlice';

export default configureStore({
    reducer: {
        cuisine: cuisineReducer,
    }
});

