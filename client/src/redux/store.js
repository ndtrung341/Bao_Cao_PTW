import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import collectionReducer from './collectionSlice';
import cartReducer from './cartSlice';
import dialogReducer from './dialogSlice';

const rootReducer = combineReducers({
   collection: collectionReducer,
   cart: cartReducer,
   dialog: dialogReducer,
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: false,
   }),
});
