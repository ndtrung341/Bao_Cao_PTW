import { makeStyles } from '@material-ui/core';
import { Box, CircularProgress, Pagination, Paper, Tab, Tabs, Typography } from '@mui/material';
import { orderApi } from 'api/orderApi';
import OrderTable from 'components/Admin/OrderTable';
import { PURCHASE_TYPE } from 'constants';
import useMergeState from 'hooks/useMergeState';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
   title: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(3),
   },
}));

const OrderManagement = () => {
   const classes = useStyles();
   const [filters, setFilters] = useMergeState({
      type: 0,
      page: 1,
   });

   const [paginate, setPaginate] = useMergeState({
      orderList: [],
      pagination: {},
   });

   const [loading, setLoading] = useState(false);

   useEffect(() => {
      let isUnmounted = false;

      (async () => {
         setLoading(true);

         const { data, pagination } = await orderApi.getAll(filters);
         if (isUnmounted) return;

         setPaginate({ orderList: data, pagination });
         setLoading(false);
      })();

      return () => {
         isUnmounted = true;
      };
   }, [filters]);

   const handleChange = (event, newValue) => {
      setFilters({ type: newValue });
   };

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

   const confirmOrder = async (order) => {
      try {
         setLoading(true);
         await orderApi.confirmOrder(order.id);
         setLoading(false);
         setFilters({ ...filters });
         toast.success('Xác nhận đơn hàng thành công');
      } catch (error) {
         toast.error('Xác nhận đơn hàng thất bại');
      }
   };

   const completeOrder = async (order) => {
      console.log(order);
      try {
         setLoading(true);
         await orderApi.completeOrder(order.id);
         setLoading(false);
         setFilters({ ...filters });
         toast.success('Hoàn tất đơn hàng thành công');
      } catch (error) {
         toast.error('Hoàn tất đơn hàng thất bại');
      }
   };

   const deleteOrder = async (order) => {
      console.log(order);
      try {
         setLoading(true);
         await orderApi.delete(order);
         setLoading(false);
         toast.success('Xóa đơn hàng thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Xóa đơn hàng thất bại');
      }
   };

   return (
      <>
         <Box className={classes.title}>
            <Typography variant='h5'>Danh sách hóa đơn</Typography>
         </Box>

         <Box sx={{ borderBottom: 2, borderColor: 'divider', my: 2 }} component={Paper}>
            <Tabs onChange={handleChange} value={filters.type} variant={'fullWidth'}>
               {PURCHASE_TYPE.map((item) => (
                  <Tab label={item.label} value={item.type} key={item.key} />
               ))}
            </Tabs>
         </Box>

         <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 400 }}>
            {!loading ? (
               paginate.orderList.length > 0 ? (
                  <>
                     <OrderTable
                        orderList={paginate.orderList}
                        onConfirm={confirmOrder}
                        onComplete={completeOrder}
                        onDelete={deleteOrder}
                        onCancel={cancelOrder}
                     />
                     <Box my={2} display='flex' justifyContent='center'>
                        <Pagination
                           page={filters.page}
                           count={
                              Math.ceil(paginate.pagination._total / paginate.pagination._limit) ||
                              0
                           }
                           color='primary'
                           onChange={(e, page) => setFilters({ page })}
                        />
                     </Box>
                  </>
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
      </>
   );
};

export default OrderManagement;
