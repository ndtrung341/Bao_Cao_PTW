import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';
import InfoIcon from '@mui/icons-material/Info';
import useModal from 'hooks/useModal';

const iconList = {
   success: <DoneIcon color='success' fontSize='large' />,
   error: <DangerousIcon color='error' fontSize='large' />,
   warning: <WarningIcon color='warning' fontSize='large' />,
   info: <InfoIcon color='info' fontSize='large' />,
};

const ModalContainer = () => {
   const { open, modalOptions, closeModal } = useModal();
   const { type, title, content, onSubmit } = modalOptions;

   const handleSubmit = () => {
      onSubmit && onSubmit();
      closeModal();
   };

   return (
      <Dialog
         open={open}
         onClose={closeModal}
         aria-labelledby='alert-dialog-title'
         aria-describedby='alert-dialog-description'
         maxWidth='xs'
         fullWidth
      >
         <DialogTitle
            id='alert-dialog-title'
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
         >
            {iconList[type]}
            {title}
         </DialogTitle>
         <DialogContent>
            <DialogContentText id='alert-dialog-description'>{content}</DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button color='error' variant='outlined' onClick={closeModal}>
               Hủy
            </Button>
            <Button variant='contained' onClick={handleSubmit}>
               Xác nhận
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default ModalContainer;
