const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
   show: false,
   options: {
      title: 'Xin chào',
      content: 'Cho mình làm wen nhớ',
      onSubmit: null,
   },
};

const dialogSlice = createSlice({
   name: 'dialog',
   initialState,
   reducers: {
      showDialog(state, action) {
         state.show = true;
         const { title, content, onSubmit } = action.payload;
         state.options = { title, content, onSubmit };
      },

      closeDialog(state) {
         state.show = false;
      },
   },
});

// reducer
const dialogReducer = dialogSlice.reducer;
export default dialogReducer;

// actions
export const dialogActions = dialogSlice.actions;

// selectors
export const selectDialogShow = (state) => state.dialog.show;
export const selectDialogOptions = (state) => state.dialog.options;
