import {
   Box,
   Button,
   List,
   ListItem,
   ListItemText,
   Paper,
   Rating,
   Typography,
   Pagination,
   Backdrop,
   CircularProgress,
} from '@mui/material';
import { productApi } from 'api/productApi';
import React, { useCallback, useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import { toast } from 'react-toastify';

const Reviews = ({ product }) => {
   const [open, setOpen] = useState(false);
   const [reviews, setReviews] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [pagination, setPagination] = useState({});

   const fetchReviews = async (productId, page = 1) => {
      const { data: reviewList, pagination } = await productApi.getReviews({
         page,
         productId: productId,
      });
      setReviews(reviewList);
      setPagination(pagination);
   };

   useEffect(() => {
      if (!product) return;
      fetchReviews(product.id, page);
   }, [product, page]);

   const handleReview = async (values) => {
      setLoading(true);
      await productApi.review(values);
      // await fetchReviews(product.id);
      setLoading(false);
      setOpen(false);
      toast.success('Đánh giá đã được và chờ xét duyệt');
   };

   return (
      <Paper sx={{ p: 2, my: 3 }} elevation={0}>
         <Box sx={{ display: 'flex', mx: 2, justifyContent: 'space-between' }}>
            <Typography variant={'h6'}>Đánh giá</Typography>
            <Button sx={{ minWidth: 120 }} variant='outlined' onClick={() => setOpen(true)}>
               Viết đánh giá
            </Button>
         </Box>
         {reviews.length === 0 ? (
            <Typography align='center' sx={{ fontSize: 20, py: 2 }}>
               Sản phẩm chưa có đánh giá
            </Typography>
         ) : (
            <List>
               {reviews.map((item, index) => (
                  <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                     <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                        {item.username}
                     </Typography>
                     <Rating value={item.rating} size={'small'} sx={{ my: '5px' }} readOnly />
                     <Typography sx={{ fontSize: 16 }} color='text.secondary'>
                        {item.content}
                     </Typography>
                  </ListItem>
               ))}
            </List>
         )}

         {reviews.length > 0 && (
            <Box sx={{ my: 2 }}>
               <Pagination
                  page={page}
                  count={Math.ceil(pagination._total / pagination._limit) || 0}
                  color='primary'
                  onChange={(e, page) => setPage(page)}
               />
            </Box>
         )}

         <ReviewForm
            open={open}
            product={product}
            onClose={() => setOpen(false)}
            onSubmit={handleReview}
         />

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </Paper>
   );
};

export default Reviews;
