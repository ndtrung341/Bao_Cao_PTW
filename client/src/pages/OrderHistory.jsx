import { Backdrop, CircularProgress, Container } from '@mui/material';
import { orderApi } from 'api/orderApi';
import Breadcrumb from 'components/Common/Breadcrumb';
import HistoryItem from 'components/Order/HistoryItem';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const OrderHistory = () => {
   const [orderList, setOrderList] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      (async () => {
         setLoading(true);
         const res = await orderApi.getHistory();
         setOrderList(res.data);
         setLoading(false);
      })();
   }, []);

   if (loading) {
      return (
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      );
   }

   console.log(orderList);

   return (
      <>
         <Helmet>
            <title>{'Lịch sử mua hàng'}</title>
         </Helmet>

         <Breadcrumb title={'Lịch sử mua hàng'} />

         <Container>
            {orderList.map((order) => (
               <HistoryItem key={order.id} order={order} />
            ))}
         </Container>
      </>
   );
};

export default OrderHistory;
