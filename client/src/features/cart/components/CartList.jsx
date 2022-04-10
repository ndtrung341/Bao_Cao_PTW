import React from 'react';
import { Typography, Box } from '@mui/material';
import CartItem from './CartItem';
import { products } from 'data/product';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   header: {
      display: 'flex',
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&& > *': {
         textAlign: 'center',
         width: '16%',
         fontWeight: 700,
      },
      '& > *:first-child': {
         width: '51%',
         textAlign: 'left',
      },
   },
}));

const CartList = () => {
   const classes = useStyles();
   const productList = products.slice(0, 3);
   return (
      <>
         <Box className={classes.header} py={2}>
            <Typography>Thông tin sản phẩm</Typography>
            <Typography>Đơn giá</Typography>
            <Typography>Số lượng</Typography>
            <Typography>Thành tiền</Typography>
         </Box>
         <Box>
            {productList.map((item, index) => (
               <CartItem key={index} product={item} />
            ))}
         </Box>
      </>
   );
};

export default CartList;
