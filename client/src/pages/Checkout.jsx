import { Container, Grid } from '@mui/material';
import CheckoutForm from 'components/Checkout/CheckoutForm';
import OrderDetail from 'components/Checkout/OrderDetail';
import Breadcrumb from 'components/Common/Breadcrumb';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
   return (
      <>
         <Helmet>
            <title>Thanh toán</title>
         </Helmet>

         <Breadcrumb title={'Thanh toán'} />

         <Container sx={{ mb: 3 }}>
            <Grid container spacing={2} mb={2}>
               <Grid item lg={7}>
                  <CheckoutForm />
               </Grid>

               <Grid item lg={5}>
                  <OrderDetail />
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default Checkout;
