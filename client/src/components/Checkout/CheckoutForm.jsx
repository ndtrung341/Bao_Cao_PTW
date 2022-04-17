import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import Payment from './Payment';
import ShippingInfo from './ShippingInfo';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const defaultValues = {
   fullName: '',
   phone: '',
   province: '',
   district: '',
   ward: '',
   payment: '',
};

const schema = yup.object().shape({
   fullName: yup
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
   province: yup.string().required('Vui lòng chọn Tỉnh/Thành phố'),
   district: yup.string().required('Vui lòng chọn Quận/Huyện'),
   ward: yup.string().required('Vui lòng chọn Phường/Xã'),
   payment: yup.string().required('Vui lòng chọn phương thức thanh toán'),
});

const CheckoutForm = () => {
   const form = useForm({
      defaultValues,
      mode: 'all',
      resolver: yupResolver(schema),
   });

   const handleCheckout = (values) => {
      console.log(values);
   };
   return (
      <Box component={'form'} onSubmit={form.handleSubmit(handleCheckout)}>
         <ShippingInfo form={form} />

         <Payment form={form} />

         <Button sx={{ mt: 2 }} variant='contained' type='submit'>
            Đặt mua
         </Button>
      </Box>
   );
};

export default CheckoutForm;
