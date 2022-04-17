import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
const initialState = {
   list: [],
   promotion: false,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItemToCart(state, action) {
         const newItem = action.payload;
         const exitsItem = state.list.find((item) => item.id === newItem.id);
         if (!exitsItem) {
            state.list.push(newItem);
         } else {
            exitsItem.quantity += newItem.quantity;
         }
      },

      updateItemCart(state, action) {
         const { id, quantity } = action.payload;
         const item = state.list.find((item) => item.id === id);
         item && (item.quantity = quantity);
      },

      removeItemFromCart(state, action) {
         state.list = state.list.filter((item) => item.id !== action.payload);
      },

      emptyCart(state) {
         state.list = [];
      },
   },
});

// reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

// actions
export const cartActions = cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.list;
export const selectCartCount = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => val + 1, 0)
);
export const selectCartTotal = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => (val += item.quantity * item.price), 0)
);
