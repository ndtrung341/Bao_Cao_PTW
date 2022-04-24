import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { cartApi } from 'api/cartApi';
import { createSelector } from 'reselect';

const initialState = {
   items: [],
   isUpdated: true,
};

export const fetchCart = createAsyncThunk('cart/fetch', async () => {
   const response = await cartApi.get();
   return response.items;
});

export const updateCart = createAsyncThunk(
   'cart/update',
   async ({ productId, quantity }) => {
      const params = { product_id: productId, quantity };
      quantity === 0 ? cartApi.removeItem(productId) : cartApi.updateItem(params);
   }
);

export const addCart = createAsyncThunk('cart/add', async ({ product_id, quantity }) => {
   const params = { product_id, quantity };
   await cartApi.addItem(params);
});

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      emptyCart(state) {
         state.items = [];
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchCart.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isUpdated = false;
         })
         .addMatcher(isAnyOf(updateCart.fulfilled, addCart.fulfilled), (state) => {
            state.isUpdated = true;
         });
   },
});

// reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

// actions
export const cartActions = cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartIsUpdated = (state) => state.cart.isUpdated;
export const selectCartDisabled = (state) => state.cart.disabled;

export const selectCartCount = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => val + 1, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => (val += item.quantity * item.price), 0)
);
