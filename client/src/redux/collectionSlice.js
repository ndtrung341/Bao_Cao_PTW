import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from 'api/productApi';

const initialState = {
   loading: true,
   list: [],
   filters: {},
   pagination: {
      _page: 1, // current page
      _limit: 12, // per page
      _start: 1, // index first item
      _end: 12, // index last item
      _count: 12, // amount item of current page
      _total: 12, // total item
   },
};

export const fetchCollection = createAsyncThunk(
   'collection/fetchCollection',
   async ({ filters, urlKey }, thunkAPI) => {
      try {
         const res = await productApi.getAll({ ...filters, urlKey });
         return res;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

const collectionSlice = createSlice({
   name: 'collection',
   initialState,
   extraReducers: {
      [fetchCollection.pending]: (state, action) => {
         console.log(action);
         state.loading = true;
      },
      [fetchCollection.fulfilled]: (state, action) => {
         const { filters, data, pagination } = action.payload;
         state.loading = false;
         state.list = data;
         state.pagination = pagination;
         state.filters = filters;
      },
   },
});

// reducer
const collectionReducer = collectionSlice.reducer;
export default collectionReducer;

// actions
export const collectionActions = collectionSlice.actions;

// selectors
export const selectCollectionLoading = (state) => state.collection.loading;
export const selectCollection = (state) => state.collection.list;
export const selectFilters = (state) => state.collection.filters;
export const selectPagination = (state) => state.collection.pagination;
