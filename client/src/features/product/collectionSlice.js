import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from 'api/productApi';
import { createSelector } from 'reselect';

const initialState = {
   loading: false,
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
   async (filters) => {
      const { data, pagination } = await productApi.getAll(filters);
      return { data, pagination };
   }
);

const collectionSlice = createSlice({
   name: 'collection',
   initialState,
   reducers: {
      setFilters(state, action) {
         // console.log(action);
         state.filters = action.payload;
      },
   },
   extraReducers: {
      [fetchCollection.pending]: (state) => {
         state.loading = true;
      },
      [fetchCollection.fulfilled]: (state, action) => {
         state.loading = false;
         state.list = action.payload.data;
         state.pagination = action.payload.pagination;
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

export const selectTotalPage = createSelector(
   [selectPagination],
   ({ _total, _limit }) => {
      return Math.ceil(_total / _limit);
   }
);
