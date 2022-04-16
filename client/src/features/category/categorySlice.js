import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import categoryApi from 'api/categoryApi';

const initialState = {
   list: [],
   selectedCategoryId: 1,
};

export const fetchCategoryList = createAsyncThunk('category/fetchList', async () => {
   const { data } = await categoryApi.getAll();
   return data;
});

const categorySlice = createSlice({
   name: 'category',
   initialState,
   extraReducers: {
      [fetchCategoryList.fulfilled]: (state, action) => {
         state.list = action.payload;
      },
   },
});

// reducer
const categoryReducer = categorySlice.reducer;
export default categoryReducer;

// actions
export const categoryActions = categorySlice.actions;

// selectors
export const selectCategoryList = (state) => state.category.list;
export const selectSelectedCategoryId = (state) => state.category.selectedCategoryId;
export const selectCategoryParentList = createSelector([selectCategoryList], (list) =>
   list.filter((item) => !item.parent)
);
export const selectCategoryChildrenList = createSelector(
   [selectCategoryList, selectSelectedCategoryId],
   (list, id) => list.filter((item) => item.parent && item.parent.id === id)
);
