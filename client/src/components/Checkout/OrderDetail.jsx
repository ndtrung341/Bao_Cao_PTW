import { Box, Divider, Paper, Typography } from '@mui/material';
import CartSummary from 'components/Cart/CartSummary';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/cartSlice';
import { formatCurrency, getFullPathImage } from 'utils';

const OrderItem = ({ item }) => {
   return (
      <Box display='flex' py={1}>
         <img src={getFullPathImage(item.thumb)} alt='' width={50} height={50} />
         <Box sx={{ mx: 1.5, flexGrow: 1 }}>
            <Typography variant={'body2'}>{item.name}</Typography>
            <Typography variant={'body2'} color='text.secondary' mt={0.5}>
               SL: <strong>{item.quantity}</strong>
            </Typography>
         </Box>
         <Typography variant={'body2'} color='error' sx={{ alignSelf: 'center' }}>
            {formatCurrency(item.price)}
         </Typography>
      </Box>
   );
};

const OrderDetail = () => {
   const cartItems = useSelector(selectCartItems);
   return (
      <Paper sx={{ p: 3 }}>
         <Typography variant='h6' mb={1}>
            Thông tin đơn hàng
         </Typography>

         {cartItems.map((item, index) => (
            <OrderItem item={item} key={index} />
         ))}

         <Divider sx={{ my: 2 }} />

         <CartSummary />
      </Paper>
   );
};

export default OrderDetail;
