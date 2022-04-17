import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency, getFullPathImage } from 'utils';
import QuantityField from 'components/FormControl/QuantityField';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cartSlice';
import { dialogActions } from 'redux/dialogSlice';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(1, 0),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.palette.divider}`,
   },
   '&&>*': {
      boxSizing: 'border-box',
   },
   thumb: {
      width: 100,
      height: 100,
      display: ' flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
   },
   info: {
      paddingLeft: 15,
      verticalAlign: 'top',
      paddingRight: 10,
      display: 'flex',
      width: 'calc(100% - 100px)',
      '&>*:not(:first-child)': {
         width: '22%',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
   },
   name: {
      width: '48%',
      marginBottom: 5,
      '&>a': {
         display: 'block',
         color: 'inherit',
         textDecoration: 'none',
         fontSize: 16,
         marginBottom: 5,
      },
   },
}));
const CartItem = ({ item }) => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const handleRemoveItemFromCart = () => {
      dispatch(cartActions.removeItemFromCart(item.id));
      toast.success('Xóa sản phẩm thành công');
   };

   const showConfirmRemove = () => {
      dispatch(
         dialogActions.showDialog({
            title: 'Bạn chắc chắn muốn xóa sản phẩm này?',
            content: item.name,
            onSubmit: handleRemoveItemFromCart,
         })
      );
   };

   const handleUpdateQuantity = (value) => {
      if (value === 0) {
         showConfirmRemove();
      } else {
         dispatch(cartActions.updateItemCart({ id: item.id, quantity: value }));
      }
   };

   return (
      <Box className={classes.root}>
         <img src={getFullPathImage(item.thumb)} alt='' className={classes.thumb} />
         <Box className={classes.info}>
            <Box className={classes.name}>
               <Link to={'#'}>{item.name}</Link>
               <Typography
                  color='error'
                  component={'span'}
                  variant='title'
                  sx={{ cursor: 'pointer' }}
                  onClick={showConfirmRemove}
               >
                  Xóa
               </Typography>
            </Box>

            <Box>
               <Typography
                  component={'span'}
                  fontSize={16}
                  fontWeight={600}
                  color='error'
               >
                  {formatCurrency(item.price)}
               </Typography>
            </Box>

            <Box>
               <QuantityField
                  size={'small'}
                  value={item.quantity}
                  onChange={handleUpdateQuantity}
               />
            </Box>

            <Box>
               <Typography
                  component={'span'}
                  fontSize={16}
                  fontWeight={600}
                  color='error'
               >
                  {formatCurrency(item.price * item.quantity)}
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

CartItem.propTypes = {};

export default CartItem;
