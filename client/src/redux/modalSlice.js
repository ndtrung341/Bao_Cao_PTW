const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
   open: false,
   options: {
      title: 'Xin chào',
      type: '',
      content: 'Cho mình làm wen nhớ',
      onSubmit: null,
   },
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      showModal(state, action) {
         state.open = true;
         const { type, title, content, onSubmit } = action.payload;
         state.options = { type, title, content, onSubmit };
      },

      closeModal(state) {
         state.open = false;
         // state.options = initialState.options;
      },
   },
});

// reducer
const modalReducer = modalSlice.reducer;
export default modalReducer;

// actions
export const modalActions = modalSlice.actions;

// selectors
export const selectModalOpen = (state) => state.modal.open;
export const selectModalOptions = (state) => state.modal.options;
