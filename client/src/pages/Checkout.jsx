import { Container } from '@mui/material';
import { orderApi } from 'api/orderApi';
import CheckoutForm from 'components/Checkout/CheckoutForm';
import Breadcrumb from 'components/Common/Breadcrumb';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions, selectCartItems } from 'redux/cartSlice';

const Checkout = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const cartItems = useSelector(selectCartItems);

   const handlePlaceOrder = async (values, payment) => {
      await orderApi.placeOrder(values);
      dispatch(cartActions.emptyCart());
      navigate('/order-success', { state: { payment } });
   };

   return (
      <>
         <Helmet>
            <title>Thanh toán</title>
         </Helmet>

         <Breadcrumb title={'Thanh toán'} />

         <Container>
            <CheckoutForm onSubmit={handlePlaceOrder} />
         </Container>
      </>
   );
};

export default Checkout;
