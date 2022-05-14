import { Container } from '@mui/material';
import Breadcrumb from 'components/Common/Breadcrumb';
import HistoryItem from 'components/Order/HistoryItem';
import HistoryList from 'components/Order/HistoryList';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrderHistory = () => {
   return (
      <>
         <Helmet>
            <title>{'Lịch sử mua hàng'}</title>
         </Helmet>

         {/* BREADCRUMB */}
         <Breadcrumb title={'Lịch sử mua hàng'} />

         <Container>
            <HistoryItem />
         </Container>
      </>
   );
};

export default OrderHistory;
