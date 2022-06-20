import { Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
   Box,
   Button,
   ButtonBase,
   Collapse,
   IconButton,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material';
import useModal from 'hooks/useModal';
import React, { useState } from 'react';
import { formatCurrency } from 'utils';

const OrderTable = ({ orderList, onDelete, onConfirm, onComplete, onCancel }) => {
   const { modal } = useModal();
   const [orderSelect, setOrderSelect] = useState(null);

   const handleRemoveClick = (order) => {
      // console.log(order);
      modal({
         type: 'warning',
         title: 'Xóa đơn hàng',
         content: `Bạn có muốn xóa đơn hàng này mà không thể khôi phục lại?`,
         onSubmit: () => onDelete(order.id),
      });
   };

   const Actions = (order) => {
      if (order.status === 1) {
         return (
            <>
               <Button
                  size='small'
                  color='success'
                  variant='outlined'
                  sx={{ ml: 1 }}
                  onClick={() => onConfirm(order)}
               >
                  Xác nhận
               </Button>
               <Button
                  size='small'
                  color='error'
                  variant='outlined'
                  sx={{ ml: 1 }}
                  onClick={() => onCancel(order)}
               >
                  Hủy đơn hàng
               </Button>
            </>
         );
      } else if (order.status === 2) {
         return (
            <Button
               size='small'
               color='info'
               variant='outlined'
               sx={{ ml: 1 }}
               onClick={() => onComplete(order)}
            >
               Hoàn tất giao hàng
            </Button>
         );
      }
   };

   return (
      <TableContainer component={Paper}>
         <Table size='small' aria-label='collapsible table'>
            <TableHead>
               <TableRow>
                  <TableCell />
                  <TableCell>Mã đơn hàng</TableCell>
                  <TableCell>Ngày lập</TableCell>
                  <TableCell align='right'>Thao tác</TableCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {orderList.map((order) => (
                  <React.Fragment key={order.id}>
                     <TableRow>
                        <TableCell>
                           <IconButton
                              aria-label='expand row'
                              size='small'
                              onClick={() =>
                                 setOrderSelect(order.id === orderSelect?.id ? null : order)
                              }
                           >
                              {orderSelect?.id === order.id ? (
                                 <KeyboardArrowUp />
                              ) : (
                                 <KeyboardArrowDown />
                              )}
                           </IconButton>
                        </TableCell>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{new Date(order.created_at).toLocaleString()}</TableCell>
                        <TableCell align='right'>
                           {Actions(order)}
                           <Button
                              size='small'
                              color='error'
                              variant='contained'
                              sx={{ ml: 1 }}
                              onClick={() => handleRemoveClick(order)}
                           >
                              Xóa
                           </Button>
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                           <Collapse in={orderSelect?.id === order.id} timeout='auto' unmountOnExit>
                              <Box sx={{ mx: 1, my: 2 }}>
                                 <Typography gutterBottom variant='h6'>
                                    Thông tin khách hàng
                                 </Typography>
                                 <Table size='small' aria-label='purchases'>
                                    <TableHead>
                                       <TableRow>
                                          <TableCell>Họ tên</TableCell>
                                          <TableCell>SDT</TableCell>
                                          <TableCell>Mã giao dịch</TableCell>
                                          <TableCell align='right'>Địa chỉ giao hàng</TableCell>
                                       </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       <TableRow>
                                          <TableCell component='th' scope='row'>
                                             {order.customerName}
                                          </TableCell>
                                          <TableCell>{order.phone}</TableCell>
                                          <TableCell>{order.transactionID}</TableCell>
                                          <TableCell align='right'>{order.address}</TableCell>
                                       </TableRow>
                                    </TableBody>
                                 </Table>
                              </Box>
                              <Box sx={{ mx: 1, my: 2 }}>
                                 <Typography gutterBottom variant='h6'>
                                    Chi tiết đơn hàng
                                 </Typography>
                                 <Table size='small' aria-label='purchases'>
                                    <TableHead>
                                       <TableRow>
                                          <TableCell>Sản phẩm</TableCell>
                                          <TableCell align='right'>SL</TableCell>
                                          <TableCell align='right'>Đơn giá</TableCell>
                                          <TableCell align='right'>Thành tiền</TableCell>
                                       </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       {order.items.map((item, index) => (
                                          <TableRow key={item.index}>
                                             <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                   <img
                                                      src={item.thumbnail}
                                                      alt=''
                                                      style={{
                                                         width: '100px',
                                                         objectFit: 'contain',
                                                         height: '100px',
                                                      }}
                                                   />
                                                   <Typography>{item.product_name}</Typography>
                                                </Box>
                                             </TableCell>
                                             <TableCell align='right'>{item.quantity}</TableCell>
                                             <TableCell align='right'>
                                                {formatCurrency(item.price)}
                                             </TableCell>
                                             <TableCell align='right'>
                                                <Typography color='error'>
                                                   {formatCurrency(item.total)}
                                                </Typography>
                                             </TableCell>
                                          </TableRow>
                                       ))}
                                       <TableRow>
                                          <TableCell rowSpan={2} />
                                          <TableCell colSpan={2}>Tạm tính</TableCell>
                                          <TableCell align='right'>
                                             {formatCurrency(order.total)}
                                          </TableCell>
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
                              </Box>
                           </Collapse>
                        </TableCell>
                     </TableRow>
                  </React.Fragment>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default OrderTable;
