import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { cartApi } from 'api/cartApi';
import { createSelector } from 'reselect';

const initialState = {
   items: [],
   isUpdated: true,
   isLoading: true,
};

export const fetchCart = createAsyncThunk('cart/fetch', async () => {
   const response = await cartApi.get();
   return response.items;
});

export const updateCart = createAsyncThunk('cart/update', async ({ productId, quantity }) => {
   const params = { productId: productId, quantity };
   await (quantity === 0 ? cartApi.removeItem(productId) : cartApi.updateItem(params));
});

export const addCart = createAsyncThunk('cart/add', async ({ productId, quantity }) => {
   const params = { productId, quantity };
   await cartApi.addItem(params);
});

export const clearCart = createAsyncThunk('cart/clear', async () => {
   await cartApi.clear();
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
         .addCase(fetchCart.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchCart.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isUpdated = false;
            state.isLoading = false;
         })
         .addCase(clearCart.fulfilled, (state) => {
            state.items = [];
         })
         .addMatcher(isAnyOf(updateCart.fulfilled, addCart.fulfilled), (state, action) => {
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
export const selectCartLoading = (state) => state.cart.isLoading;

export const selectCartCount = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => val + 1, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (list) =>
   list.reduce((val, item) => (val += item.quantity * item.salePrice), 0)
);
