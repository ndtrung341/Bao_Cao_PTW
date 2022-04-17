import { Button, Container, Grid, Paper } from '@mui/material';
import CartList from 'components/Cart/CartList';
import CartSummary from 'components/Cart/CartSummary';
import Breadcrumb from 'components/Common/Breadcrumb';
import CartEmpty from 'components/Cart/CartEmpty';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from 'redux/cartSlice';

const Cart = () => {
   const cartCount = useSelector(selectCartCount);

   return (
      <>
         <Helmet>
            <title>{'Giỏ hàng'}</title>
         </Helmet>

         {/* BREADCRUMB */}
         <Breadcrumb title={'Giỏ hàng'} />

         <Paper elevation={0} sx={{ mb: 3, p: 2 }}>
            <Container>
               {cartCount === 0 ? (
                  <CartEmpty />
               ) : (
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
               )}
            </Container>
         </Paper>
      </>
   );
};

export default Cart;
