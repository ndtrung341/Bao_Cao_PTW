import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
   const { state } = useLocation();
   // const payment = state?.payment;
   const order = state?.order;

   // if (!payment) {
   //    return <Navigate to={'404'} replace={true} />;
   // }

   if (!order) {
      return <Navigate to={'404'} replace={true} />;
   }

   return (
      <Paper elevation={0} sx={{ py: 3 }}>
         <Container>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <img src={'/images/order-success.png'} alt='' width={150} />
               <Typography variant='body1' sx={{ mt: 2, mb: 1 }}>
                  Đặt thành công. Đơn hàng đang được xử lý
               </Typography>
               <Typography variant='h5'>CẢM ƠN BẠN ĐÃ MUA HÀNG 🤞</Typography>
               {/* <Typography variant='body1'>TRANSACTION ID: {payment.id}</Typography> */}
               <Typography variant='body1'>Mã đơn hàng: {order.id}</Typography>
            </Box>
         </Container>
      </Paper>
   );
};

export default OrderSuccess;
