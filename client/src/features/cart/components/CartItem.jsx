import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency } from 'utils';
import QuantityField from 'components/FormControl/QuantityField';
import { makeStyles } from '@material-ui/core';

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
         width: '20%',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
   },
   name: {
      width: '50%',
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
const CartItem = ({ product }) => {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <img src={product.thumb} alt='' className={classes.thumb} />
         <Box className={classes.info}>
            <Box className={classes.name}>
               <Link to={'#'}>{product.name}</Link>
               <Typography
                  color='error'
                  component={'span'}
                  variant='title'
                  s
                  sx={{ cursor: 'pointer' }}
               >
                  Xóa
               </Typography>
            </Box>
            <Box>
               <Typography component={'span'} fontSize={16} fontWeight={600} color='error'>
                  {formatCurrency(product.salePrice)}
               </Typography>
            </Box>
            <Box>
               <QuantityField size={'small'} />
            </Box>
            <Box>
               <Typography component={'span'} fontSize={16} fontWeight={600} color='error'>
                  {formatCurrency(product.salePrice)}
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

CartItem.propTypes = {};

export default CartItem;
