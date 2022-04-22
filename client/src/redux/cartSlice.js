import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
const initialState = {
   list: [
      {
         id: 108,
         name: 'Rule 1 Essential Amino 9 EAA+Energy, 30 Servings (345g)',
         thumb: 'storage/upload/product/rule-1-essential-amino-9-eaaenergy-30-servings-345g/1649896954.png',
         slug: 'rule-1-essential-amino-9-eaaenergy-30-servings-345g',
         price: 550000,
         quantity: 1,
      },
   ],
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
