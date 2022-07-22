import {configureStore} from '@reduxjs/toolkit';
import cuisineReducer from './cuisineSlice';
import filterRestsReducer from './filterRestsSlice';

export default configureStore({
    reducer: {
        cuisine: cuisineReducer,
        restraunt: filterRestsReducer
    }
});

