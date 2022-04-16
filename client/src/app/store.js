import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from 'features/category/categorySlice';
import collectionReducer from 'features/product/collectionSlice';

const rootReducer = combineReducers({
   collection: collectionReducer,
   category: categoryReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
