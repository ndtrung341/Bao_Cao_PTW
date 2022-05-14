import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { formatCurrency } from 'utils';

const HistoryItem = ({ order }) => {
   return (
      <TableContainer>
         <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
            <TableHead>
               <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align='right'>SL</TableCell>
                  <TableCell align='right'>Đơn giá</TableCell>
                  <TableCell align='right'>Thành tiền</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {order?.products.map((item) => (
                  <TableRow key={item.productId}>
                     <TableCell></TableCell>
                     <TableCell align='right'>{item.quantity}</TableCell>
                     <TableCell align='right'>{item.salePrice}</TableCell>
                     <TableCell align='right'>{formatCurrency(item.total)}</TableCell>
                  </TableRow>
               ))}

               <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell colSpan={2}>Tạm tính</TableCell>
                  <TableCell align='right'>{formatCurrency(order.total)}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell colSpan={2}>Tổng cộng</TableCell>
                  <TableCell align='right'>{formatCurrency(order.total)}</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default HistoryItem;
