import {
   Button,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import { formatCurrency } from 'utils';

const PurchaseItem = ({ purchase, onCancel }) => {
   const displayStatus = useMemo(() => {
      if (purchase.status === 1) {
         return 'Chờ xác nhận';
      } else if (purchase.status === 2) {
         return 'Chờ giao hàng';
      } else if (purchase.status === 3) {
         return 'Đã giao';
      } else {
         return 'Đã hủy';
      }
   }, [purchase]);

   const handleCancelClick = () => {
      onCancel(purchase);
   };

   return (
      <TableContainer component={Paper} sx={{ px: 2 }} evalation={2}>
         <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
            <TableHead>
               <TableRow>
                  <TableCell>Mã đơn hàng: {purchase.id}</TableCell>
                  <TableCell colSpan={2} align='left'>
                     Ngày mua: {new Date(purchase.created_at).toLocaleString()}
                  </TableCell>
                  <TableCell>
                     <Typography color='primary'>{displayStatus}</Typography>
                  </TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align='right'>SL</TableCell>
                  <TableCell align='right'>Đơn giá</TableCell>
                  <TableCell align='right'>Thành tiền</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {purchase.items.map((item) => (
                  <TableRow key={item.productId}>
                     <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                           <img
                              src={item.thumbnail}
                              alt=''
                              style={{ width: '100px', objectFit: 'contain', height: '100px' }}
                           />
                           <Typography>{item.product_name}</Typography>
                        </Box>
                     </TableCell>
                     <TableCell align='right'>{item.quantity}</TableCell>
                     <TableCell align='right'>{formatCurrency(item.price)}</TableCell>
                     <TableCell align='right'>
                        <Typography color='error'>{formatCurrency(item.total)}</Typography>
                     </TableCell>
                  </TableRow>
               ))}

               <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell colSpan={2} align='right'>
                     Tổng cộng
                  </TableCell>
                  <TableCell align='right'>
                     <Typography color='error' fontWeight={700}>
                        {formatCurrency(purchase.total)}
                     </Typography>
                  </TableCell>
               </TableRow>
               {purchase.status === 1 && (
                  <TableRow>
                     <TableCell colSpan={3} align='right'>
                        <Button color='error' variant='contained' onClick={handleCancelClick}>
                           Hủy đơn hàng
                        </Button>
                     </TableCell>
                  </TableRow>
               )}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default PurchaseItem;
