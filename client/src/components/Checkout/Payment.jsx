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
import { Controller } from 'react-hook-form';

const momo = '/images/momo.svg';
const paypal = '/images/paypal.svg';

const PaymentMethod = ({ value, thumb, title }) => {
   return (
      <FormControlLabel
         value={value}
         control={<Radio />}
         label={
            <Box display={'flex'} alignItems='center'>
               {title}
               {thumb && <Avatar src={thumb} sx={{ ml: 1, mt: 1 }} variant='square' />}
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
         <RadioGroup value={value} {...fieldRest}>
            <PaymentMethod value={'cod'} title={'Thanh toán khi nhận hàng'} />
            <PaymentMethod value={'paypal'} title={'Thanh toán bằng Paypal'} thumb={paypal} />
         </RadioGroup>
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

const Payment = ({ form, onChange }) => {
   const { control } = form;

   return (
      <Paper sx={{ p: 3 }}>
         <Typography variant='h6' mb={1}>
            Hình thức thanh toán
         </Typography>

         <Controller
            control={control}
            name='payment'
            render={({ field, fieldState: { invalid, error } }) => (
               <FormControl error={invalid}>
                  <RadioGroup
                     {...field}
                     onChange={(e) => {
                        field.onChange(e.target.value);
                        onChange(e.target.value);
                     }}
                  >
                     <PaymentMethod value={'cod'} title={'Thanh toán khi nhận hàng'} />
                     <PaymentMethod
                        value={'paypal'}
                        title={'Thanh toán bằng Paypal'}
                        thumb={paypal}
                     />
                  </RadioGroup>
                  {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
               </FormControl>
            )}
         />
      </Paper>
   );
};

export default Payment;
