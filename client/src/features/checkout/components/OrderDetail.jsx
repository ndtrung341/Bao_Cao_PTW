import { Box, Divider, Paper, Typography } from '@mui/material';
import { products } from 'data/product';
import CartSummary from 'features/cart/components/CartSummary';
import React from 'react';
import { formatCurrency } from 'utils';

const OrderItem = ({ product }) => {
   return (
      <Box display='flex' py={1}>
         <img src={product.thumb} alt='' width={50} height={50} />
         <Box sx={{ mx: 1.5, flexGrow: 1 }}>
            <Typography variant={'body2'}>{product.name}</Typography>
            <Typography variant={'body2'} color='text.secondary' mt={0.5}>
               SL: <strong>1</strong>
            </Typography>
         </Box>
         <Typography variant={'body2'} color='error' sx={{ alignSelf: 'center' }}>
            {formatCurrency(product.salePrice)}
         </Typography>
      </Box>
   );
};

const OrderDetail = () => {
   const productList = products.slice(0, 2);
   return (
      <Paper sx={{ p: 3 }}>
         <Typography variant='h6' mb={1}>
            Thông tin đơn hàng
         </Typography>

         {productList.map((item, index) => (
            <OrderItem product={item} key={index} />
         ))}

         <Divider sx={{ my: 2 }} />

         <CartSummary />
      </Paper>
   );
};

export default OrderDetail;
