import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ShippingInfo from './ShippingInfo';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import OrderDetail from './OrderDetail';
import { Box } from '@mui/system';
import PaypalButton from './PaypalButton';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'redux/cartSlice';
import Payment from './Payment';

const defaultValues = {
   customerName: '',
   phone: '',
   province: '',
   district: '',
   ward: '',
   payment: '',
};

const schema = yup.object().shape({
   customerName: yup
      .string()
      .required('Vui lòng nhập họ tên')
      .test({
         test: (value) => value.split(/\s+/).length >= 2,
         message: 'Họ tên phải 2 từ trở lên',
      }),
   phone: yup
      .string()
      .required('Vui lòng nhập số điện thoại')
      .matches(/[0-9]+/, {
         message: 'Số điện thoại không hợp lệ',
      }),
   province: yup.mixed().test('required', 'Vui lòng chọn Tỉnh/Thành phố', (value) => !!value),
   district: yup.mixed().test('required', 'Vui lòng chọn Quận/Huyện', (value) => !!value),
   ward: yup.mixed().test('required', 'Vui lòng chọn Phường/Xã', (value) => !!value),
});

const CheckoutForm = ({ onSubmit }) => {
   const total = useSelector(selectCartTotal);
   const cartItems = useSelector(selectCartItems);
   const [paymentMethod, setPaymentMethod] = useState('');

   const form = useForm({
      defaultValues,
      mode: 'all',
      resolver: yupResolver(schema),
   });

   // payment success
   const handleApprove = async (data, actions) => {
      const order = await actions.order.capture();
      const values = form.getValues();

      const address = [values.ward, values.district, values.province]
         .map((item) => item.label)
         .join(', ');

      const newValues = {
         ...values,
         address,
         cartItems,
         // transactionID: order.id,
         province: undefined,
         district: undefined,
         ward: undefined,
      };

      // onSubmit?.(JSON.parse(JSON.stringify(newValues)), order);
      onSubmit?.(JSON.parse(JSON.stringify(newValues)));
   };

   const handleBuyClick = async () => {
      const isValid = await form.trigger();

      if (!isValid) return;

      const values = form.getValues();

      const address = [values.ward, values.district, values.province]
         .map((item) => item.label)
         .join(', ');

      const newValues = {
         ...values,
         address,
         cartItems,
         province: undefined,
         district: undefined,
         ward: undefined,
      };

      onSubmit?.(JSON.parse(JSON.stringify(newValues)));
   };

   const handlePaymentMethodChange = (payment) => {
      setPaymentMethod(payment);
   };

   // validate before checkout
   const handlePaypalClick = async (data, actions) => {
      const isValid = await form.trigger();
      return isValid ? actions.resolve() : actions.reject();
   };

   return (
      <Grid container spacing={2} mb={2}>
         <Grid item lg={7}>
            <Box component={'form'} autoComplete='off'>
               <ShippingInfo form={form} />
               <Payment form={form} onChange={handlePaymentMethodChange} />
            </Box>
         </Grid>
         <Grid item lg={5}>
            <Paper sx={{ p: 3, mb: 2 }}>
               <OrderDetail />
               <Box sx={{ mt: 2 }}>
                  {(() => {
                     switch (paymentMethod) {
                        case 'cod':
                           return (
                              <Button variant='contained' fullWidth onClick={handleBuyClick}>
                                 Thanh toán
                              </Button>
                           );
                        case 'paypal':
                           return (
                              <PaypalButton
                                 onClick={handlePaypalClick}
                                 onApprove={handleApprove}
                                 total={(total * 0.000043).toFixed(2)}
                              />
                           );
                        default:
                           return null;
                     }
                  })()}
               </Box>
            </Paper>
         </Grid>
      </Grid>
   );
};

export default CheckoutForm;
