import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import collectionReducer from './collectionSlice';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
   cart: cartReducer,
   auth: authReducer,
   collection: collectionReducer,
   modal: modalReducer,
});

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: false,
   }),
});

export default store;
