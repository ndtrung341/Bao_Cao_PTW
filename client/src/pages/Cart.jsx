import { Backdrop, Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import CartList from 'components/Cart/CartList';
import CartSummary from 'components/Cart/CartSummary';
import Breadcrumb from 'components/Common/Breadcrumb';
import CartEmpty from 'components/Cart/CartEmpty';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from 'redux/cartSlice';

const Cart = () => {
   const cartCount = useSelector(selectCartCount);
   const loading = useSelector((state) => state.cart.isLoading);

   // if (loading) {
   //    return (
   //       <Backdrop
   //          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
   //          open={loading}
   //       >
   //          <CircularProgress color='inherit' size={50} />
   //       </Backdrop>
   //    );
   // }

   return (
      <>
         <Helmet>
            <title>{'Giỏ hàng'}</title>
         </Helmet>

         {/* BREADCRUMB */}
         <Breadcrumb title={'Giỏ hàng'} />

         <Paper elevation={0} sx={{ py: 3 }}>
            <Container>
               {cartCount === 0 ? (
                  <CartEmpty />
               ) : (
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <CartList />
                     </Grid>
                     <Grid item xs={3} ml='auto'>
                        <CartSummary />
                        <Link to={'/checkout'} style={{ display: 'block' }}>
                           <Button variant='contained' fullWidth sx={{ mt: 1 }}>
                              Thanh toán
                           </Button>
                        </Link>
                     </Grid>
                  </Grid>
               )}
            </Container>
         </Paper>

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </>
   );
};

export default Cart;
