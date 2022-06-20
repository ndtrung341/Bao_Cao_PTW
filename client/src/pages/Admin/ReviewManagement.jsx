import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Pagination, Typography } from '@mui/material';
import axiosClient from 'api/axiosClient';
import { productApi } from 'api/productApi';
import { userApi } from 'api/userApi';
import ReviewTable from 'components/Admin/ReviewTable';
import UserTable from 'components/Admin/UserTable';
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

const ReviewManagement = () => {
   const classes = useStyles();
   const [loading, setLoading] = useState(false);
   const [reviewList, setReviewList] = useState([]);
   const [pagination, setPagination] = useState({});
   const [filters, setFilters] = useState({
      page: 1,
   });

   useEffect(() => {
      let isUnmounted = false;

      (async () => {
         setLoading(true);

         const res = await axiosClient.get('reviews', { filters });
         if (isUnmounted) return;

         setReviewList(res.data);
         setPagination(res.pagination);
         setLoading(false);
      })();

      return () => {
         isUnmounted = true;
      };
   }, [filters]);

   const deleteReview = async (reviewId) => {
      try {
         await axiosClient.delete('reviews/' + reviewId);
         toast.success('Xóa đánh giá thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Xóa đánh giá thất bại');
      }
   };

   const approvalReview = async (reviewId) => {
      try {
         await axiosClient.post('reviews/' + reviewId);
         toast.success('Duyệt thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Duyệt thất bại');
      }
   };

   return (
      <>
         <Box className={classes.title}>
            <Typography variant='h5'>Đánh giá</Typography>
         </Box>

         {reviewList.length === 0 ? (
            'Không có dữ liệu'
         ) : (
            <>
               <ReviewTable
                  reviewList={reviewList}
                  onDeleteReview={deleteReview}
                  onApprovalReview={approvalReview}
               />
               <Box my={2} display='flex' justifyContent='center'>
                  <Pagination
                     page={filters.page}
                     count={Math.ceil(pagination._total / pagination._limit) || 0}
                     color='primary'
                     onChange={(e, page) => setFilters({ ...filters, page })}
                  />
               </Box>
            </>
         )}

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </>
   );
};

export default ReviewManagement;
