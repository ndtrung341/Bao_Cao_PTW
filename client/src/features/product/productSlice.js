const { createSlice } = require('@reduxjs/toolkit');
const { products } = require('data/product');

const initialState = {
   list: products,
   loading: false,
   filters: {},
};

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
});

// reducer
const productReducer = productSlice.reducer;
export default productReducer;

// actions
export const productActions = productSlice.actions;

// selectors
export const selectProductList = (state) => state.product.list;
