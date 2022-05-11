import React from 'react';
import { Box, Typography } from '@mui/material';

const CartEmpty = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <img src={'/images/empty-cart.png'} alt='' width={100} />
         <Typography variant='subtitle1'>
            Không có sản phẩm nào trong giỏ hàng của bạn
         </Typography>
      </Box>
   );
};

export default CartEmpty;
