import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { formatCurrency } from 'utils';

const CartSummary = () => {
   return (
      <>
         <Box display='flex' justifyContent={'space-between'} mb={1}>
            <Typography>Tạm tính:</Typography>
            <Typography component={'span'} fontSize={16} fontWeight={600} color='error'>
               {formatCurrency(2500000)}
            </Typography>
         </Box>
         <Box display='flex' justifyContent={'space-between'} mb={1}>
            <Typography>Giảm giá:</Typography>
            <Typography component={'span'} fontSize={16} fontWeight={600} color='error'>
               {formatCurrency(1000)}
            </Typography>
         </Box>
         <Divider sx={{ my: 1 }} />
         <Box display='flex' justifyContent={'space-between'}>
            <Typography>Tổng cộng:</Typography>
            <Typography component={'span'} fontSize={18} fontWeight={600} color='error'>
               {formatCurrency(2500000)}
            </Typography>
         </Box>
      </>
   );
};

export default CartSummary;
