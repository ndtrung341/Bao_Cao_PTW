import {
   Avatar,
   FormControl,
   FormControlLabel,
   FormHelperText,
   Paper,
   Radio,
   RadioGroup,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import paypal from 'assets/img/paypal.svg';
import momo from 'assets/img/momo.svg';
import { Controller } from 'react-hook-form';

const PaymentMethod = ({ value, thumb, title }) => {
   return (
      <FormControlLabel
         value={value}
         control={<Radio />}
         label={
            <Box display={'flex'} alignItems='center'>
               <Avatar src={thumb} sx={{ mr: 1, mt: 1 }} variant='square' /> {title}
            </Box>
         }
      />
   );
};

const PaymentGroup = ({ field, fieldState }) => {
   const { name, value, ...fieldRest } = field;
   const { invalid, error } = fieldState;

   return (
      <FormControl error={invalid}>
         <RadioGroup {...fieldRest}>
            <PaymentMethod value={'momo'} title={'Thanh toán bằng Momo'} thumb={momo} />
            <PaymentMethod value={'paypal'} title={'Thanh toán bằng Paypal'} thumb={paypal} />
         </RadioGroup>
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

const Payment = ({ form }) => {
   const { control } = form;

   return (
      <Paper sx={{ p: 3 }}>
         <Typography variant='h6' mb={1}>
            Hình thức thanh toán
         </Typography>

         <Controller
            control={control}
            name='payment'
            render={({ field, fieldState }) => (
               <PaymentGroup field={field} fieldState={fieldState} />
            )}
         />
      </Paper>
   );
};

export default Payment;
