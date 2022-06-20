import { Box, makeStyles } from '@material-ui/core';
import { Backdrop, CircularProgress, Pagination, Typography } from '@mui/material';
import { orderApi } from 'api/orderApi';
import OrderTable from 'components/Admin/OrderTable';
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

const AdminOrderList = () => {
   const classes = useStyles();
   const [loading, setLoading] = useState(false);
   const [orderList, setProductList] = useState([]);
   const [pagination, setPagination] = useState({});
   const [filters, setFilters] = useState({
      page: 1,
   });

   useEffect(() => {
      let isUnmounted = false;

      (async () => {
         setLoading(true);

         const res = await orderApi.getAll(filters);
         if (isUnmounted) return;

         setProductList(res.data);
         setPagination(res.pagination);
         setLoading(false);
      })();

      return () => {
         isUnmounted = true;
      };
   }, [filters]);

   const handleDeleteOrder = async (id) => {
      try {
         await orderApi.delete(id);
         toast.success('Xóa đơn hàng thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Xóa đơn hàng thất bại');
      }
   };

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

   return (
      <Box>
         <Box className={classes.title}>
            <Typography variant='h5'>Danh sách hóa đơn</Typography>
         </Box>

         <OrderTable orderList={orderList} onDeleteOrder={handleDeleteOrder} />

         <Box my={2} display='flex' justifyContent='center'>
            <Pagination
               page={filters.page}
               count={Math.ceil(pagination._total / pagination._limit) || 0}
               color='primary'
               onChange={(e, page) => setFilters({ ...filters, page })}
            />
         </Box>
      </Box>
   );
};

export default AdminOrderList;
