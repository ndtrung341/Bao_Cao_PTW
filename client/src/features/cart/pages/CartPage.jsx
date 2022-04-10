import { Button, Container, Grid, Paper } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';

const CartPage = () => {
   return (
      <>
         <Helmet>
            <title>{'Giỏ hàng'}</title>
         </Helmet>

         {/* BREADCRUMB */}
         <Breadcrumb title={'Giỏ hàng'} />

         <Paper elevation={0} sx={{ mb: 3, p: 2 }}>
            <Container>
               <Grid container spacing={2}>
                  <Grid item lg={12}>
                     <CartList />
                  </Grid>
                  <Grid item lg={3} ml='auto'>
                     <CartSummary />
                     <Link to={'/checkout'} style={{ display: 'block' }}>
                        <Button variant='contained' fullWidth sx={{ mt: 1 }}>
                           Thanh toán
                        </Button>
                     </Link>
                  </Grid>
               </Grid>
            </Container>
         </Paper>
      </>
   );
};

export default CartPage;
