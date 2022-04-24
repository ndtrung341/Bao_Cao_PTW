import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency, getFullPathImage } from 'utils';
import QuantityField from 'components/FormFields/QuantityField';
import { makeStyles } from '@material-ui/core';
import useModal from 'hooks/useModal';

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
const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
   const classes = useStyles();
   const { modal } = useModal();

   const showConfirmRemove = () => {
      modal({
         type: 'warning',
         title: 'Bạn có muốn xóa sản phẩm này?',
         content: item.name,
         onSubmit: () => onRemoveFromCart(item.product_id),
      });
   };

   const handleQuantityChange = (value) => {
      value === 0
         ? showConfirmRemove()
         : onUpdateCart({ productId: item.product_id, quantity: value });
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
                  onChange={handleQuantityChange}
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
