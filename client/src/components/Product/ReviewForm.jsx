import React from 'react';
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Box,
   TextareaAutosize,
   FormControl,
   Rating,
   FormLabel,
   Typography,
   Grid,
   FormHelperText,
   TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
   rating: yup.number().min(1, 'Vui lòng chọn đánh giá'),
   content: yup.string().required('Vui lòng nhập cảm nhận'),
   username: yup.string().required('Vui lòng nhập họ tên'),
   email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
});
const defaultValues = {
   content: '',
   rating: 0,
   email: '',
   username: '',
};
const ReviewForm = ({ open, product, onClose, onSubmit }) => {
   const {
      control,
      trigger,
      setValue,
      getValues,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues,
      resolver: yupResolver(schema),
   });

   const handleFormSubmit = async () => {
      const valid = await trigger();
      if (valid) {
         await onSubmit?.({ ...getValues(), productId: product.id });
         reset(defaultValues);
      }
   };

   return (
      <Dialog
         open={open}
         onClose={onClose}
         aria-labelledby='alert-dialog-title'
         aria-describedby='alert-dialog-description'
         fullWidth
      >
         <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
            <img
               src={product.thumbnail}
               alt=''
               width={100}
               height={100}
               style={{ objectFit: 'contain', marginRight: 10 }}
            />
            <Typography variant={'subtitle1'}>{product.name}</Typography>
         </DialogTitle>
         <DialogContent>
            <Box component='form' autoComplete='off'>
               <Controller
                  control={control}
                  name='rating'
                  render={({ field, fieldState }) => (
                     <FormControl fullWidth margin='dense'>
                        <FormLabel sx={{ fontSize: 14, mb: 1 }}>Đánh giá</FormLabel>
                        <Rating
                           size='large'
                           value={field.value}
                           onChange={(event, newValues) => setValue('rating', newValues)}
                        />
                     </FormControl>
                  )}
               />

               <Controller
                  control={control}
                  name='content'
                  render={({ field, fieldState }) => (
                     <FormControl fullWidth margin='dense'>
                        <FormLabel sx={{ fontSize: 14, mb: 1 }}>Cảm nhận</FormLabel>
                        <TextareaAutosize {...field} minRows={10} style={{ width: '100%' }} />
                     </FormControl>
                  )}
               />

               <Grid container spacing={2}>
                  <Grid item md={6}>
                     <Controller
                        control={control}
                        name='username'
                        render={({ field, fieldState }) => (
                           <FormControl fullWidth margin='dense'>
                              <FormLabel sx={{ fontSize: 14, mb: 1 }}>Họ tên</FormLabel>
                              <TextField {...field} fullWidth placeholder='Họ tên' size='small' />
                           </FormControl>
                        )}
                     />
                  </Grid>
                  <Grid item md={6}>
                     <Controller
                        control={control}
                        name='email'
                        render={({ field, fieldState }) => (
                           <FormControl fullWidth margin='dense'>
                              <FormLabel sx={{ fontSize: 14, mb: 1 }}>Email</FormLabel>
                              <TextField {...field} fullWidth placeholder='Email' size='small' />
                           </FormControl>
                        )}
                     />
                  </Grid>
               </Grid>
            </Box>

            {errors ? (
               <FormHelperText error={true}>
                  {errors[Object.keys(errors)[0]]?.message}
               </FormHelperText>
            ) : (
               ''
            )}
         </DialogContent>
         <DialogActions sx={{ px: 2, mb: 2 }}>
            <Button variant='contained' onClick={handleFormSubmit}>
               Gửi đánh giá
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default ReviewForm;
