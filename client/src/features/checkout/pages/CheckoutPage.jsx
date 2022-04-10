import { Container, Grid } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from '../components/CheckoutForm';
import OrderDetail from '../components/OrderDetail';

const CheckoutPage = () => {
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

export default CheckoutPage;
