import React from 'react';
import { Typography, Box } from '@mui/material';
import CartItem from './CartItem';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, updateCart } from 'redux/cartSlice';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
   header: {
      display: 'flex',
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&& > *': {
         textAlign: 'center',
         width: '18%',
         fontWeight: 700,
      },
      '& > *:first-child': {
         // width: '51%',
         width: '49%',
         textAlign: 'left',
      },
   },
}));

const CartList = () => {
   const classes = useStyles();
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();

   const handleRemoveFromCart = async (productId) => {
      await dispatch(updateCart({ productId, quantity: 0 }));
      toast.success('Xóa sản phẩm thành công');
   };

   const handleUpdateCart = async (item) => {
      const { productId, quantity } = item;
      await dispatch(updateCart({ productId, quantity }));
   };

   return (
      <>
         <Box className={classes.header} py={2}>
            <Typography>Thông tin sản phẩm</Typography>
            <Typography>Đơn giá</Typography>
            <Typography>Số lượng</Typography>
            <Typography>Thành tiền</Typography>
         </Box>
         <Box>
            {cartItems.map((item, index) => (
               <CartItem
                  key={index}
                  item={item}
                  onUpdateCart={handleUpdateCart}
                  onRemoveFromCart={handleRemoveFromCart}
               />
            ))}
         </Box>
      </>
   );
};

export default CartList;
