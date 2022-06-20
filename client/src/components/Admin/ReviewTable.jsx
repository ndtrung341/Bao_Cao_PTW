import { MenuItem } from '@material-ui/core';
import {
   Button,
   Paper,
   Rating,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material';
import useModal from 'hooks/useModal';
import React from 'react';

const ReviewTable = ({ reviewList, onDeleteReview, onApprovalReview }) => {
   const { modal } = useModal();

   const handleApprovalClick = (reviewId) => {
      onApprovalReview(reviewId);
   };

   const handleRemoveClick = (reviewId) => {
      modal({
         type: 'warning',
         content: 'Bạn có muốn xóa mà không thể khôi phục lại?',
         title: `Xóa đánh giá'`,
         onSubmit: () => onDeleteReview(reviewId),
      });
   };

   return (
      <TableContainer component={Paper}>
         <Table size='small' aria-label='simple table'>
            <TableHead>
               <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Mã SP</TableCell>
                  <TableCell>Họ tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align='center'>Đánh giá</TableCell>
                  <TableCell>Nội dung</TableCell>
                  <TableCell align='right'>Thao tác</TableCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {reviewList.map((review) => (
                  <TableRow key={review.id}>
                     <TableCell>{review.id}</TableCell>
                     <TableCell>{review.productId}</TableCell>
                     <TableCell>{review.username}</TableCell>
                     <TableCell>{review.email}</TableCell>
                     <TableCell align='center'>
                        {<Rating readOnly value={review.rating} size='small' />}
                     </TableCell>
                     <TableCell>{review.content}</TableCell>

                     <TableCell align='right'>
                        {!review.approved && (
                           <Button
                              size='small'
                              color='primary'
                              variant='contained'
                              sx={{ ml: 1 }}
                              onClick={() => handleApprovalClick(review.id)}
                           >
                              Duyệt
                           </Button>
                        )}
                        <Button
                           size='small'
                           color='error'
                           variant='contained'
                           sx={{ ml: 1 }}
                           onClick={() => handleRemoveClick(review.id)}
                        >
                           Xóa
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default ReviewTable;
