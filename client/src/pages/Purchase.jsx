import { Backdrop, Box, CircularProgress, Container, Paper } from '@mui/material';
import Breadcrumb from 'components/Common/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { PURCHASE_TYPE } from 'constants';
import useMergeState from 'hooks/useMergeState';
import { orderApi } from 'api/orderApi';
import PurchaseItem from 'components/Order/PurchaseItem';
import { toast } from 'react-toastify';

const Purchase = () => {
   const [filters, setFilters] = useMergeState({
      type: 0,
      page: 1,
   });

   const [paginate, setPaginate] = useMergeState({
      purchaseList: [],
      pagination: {},
   });
   const [loading, setLoading] = useState(false);

   const handleChange = (event, newValue) => {
      setFilters({ type: newValue });
   };

   useEffect(() => {
      (async () => {
         setLoading(true);
         const { data, pagination } = await orderApi.getUserPurchaseList(filters);
         // setPurchaseList(res.data);
         setPaginate({ purchaseList: data, pagination });
         setLoading(false);
      })();
   }, [filters]);

   const cancelOrder = async (order) => {
      try {
         setLoading(true);
         await orderApi.cancelOrder(order.id);
         setLoading(false);
         setFilters({ ...filters });
         toast.success('Hủy đơn hàng thành công');
      } catch (error) {
         toast.error('Hủy đơn hàng thất bại');
      }
   };

   return (
      <>
         <Helmet>
            <title>{'Lịch sử mua hàng'}</title>
         </Helmet>

         <Container>
            <Box sx={{ borderBottom: 2, borderColor: 'divider', my: 2 }} component={Paper}>
               <Tabs onChange={handleChange} value={filters.type} variant={'fullWidth'}>
                  {PURCHASE_TYPE.map((item) => (
                     <Tab label={item.label} value={item.type} key={item.key} />
                  ))}
               </Tabs>
            </Box>

            <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 400 }}>
               {!loading ? (
                  paginate.purchaseList.length > 0 ? (
                     (() =>
                        paginate.purchaseList.map((purchase) => (
                           <PurchaseItem
                              key={purchase.id}
                              purchase={purchase}
                              onCancel={cancelOrder}
                           />
                        )))()
                  ) : (
                     <>Chưa có đơn hàng</>
                  )
               ) : (
                  <Box
                     sx={{
                        color: 'purple',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <CircularProgress color='inherit' size={50} />
                  </Box>
               )}
            </Box>
         </Container>
      </>
   );
};

export default Purchase;
