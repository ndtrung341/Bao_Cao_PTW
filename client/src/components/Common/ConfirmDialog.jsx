import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dialogActions, selectDialogOptions, selectDialogShow } from 'redux/dialogSlice';

const ConfirmDialog = () => {
   const show = useSelector(selectDialogShow);
   const { title, content, onSubmit } = useSelector(selectDialogOptions);
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(dialogActions.closeDialog());
   };

   const handleConfirm = () => {
      onSubmit();
      handleClose();
   };

   return (
      <Dialog
         open={show}
         onClose={handleClose}
         aria-labelledby='alert-dialog-title'
         aria-describedby='alert-dialog-description'
      >
         <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
         <DialogContent>
            <DialogContentText id='alert-dialog-description'>{content}</DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button color='error' variant='outlined' onClick={handleClose}>
               Hủy
            </Button>
            <Button variant='contained' onClick={handleConfirm}>
               Xác nhận
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default ConfirmDialog;
