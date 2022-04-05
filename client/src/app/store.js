import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from 'features/product/productSlice';

const rootReducer = combineReducers({
   product: productReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
