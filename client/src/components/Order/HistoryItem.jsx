import {
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
import React from 'react';
import { formatCurrency } from 'utils';

const HistoryItem = ({ order }) => {
   return (
      <TableContainer component={Paper} sx={{ mb: 3, px: 2 }}>
         <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
            <TableHead>
               <TableRow>
                  <TableCell colSpan={3}>Mã giao dịch: {order.transactionID}</TableCell>
                  <TableCell>Ngày mua: {new Date(order.created_at).toLocaleString()}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align='right'>SL</TableCell>
                  <TableCell align='right'>Đơn giá</TableCell>
                  <TableCell align='right'>Thành tiền</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {order.items.map((item) => (
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
                  <TableCell colSpan={2}>Tạm tính</TableCell>
                  <TableCell align='right'>{formatCurrency(order.total)}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell colSpan={2}>Tổng cộng</TableCell>
                  <TableCell align='right'>
                     <Typography color='error' fontWeight={700}>
                        {formatCurrency(order.total)}
                     </Typography>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default HistoryItem;
