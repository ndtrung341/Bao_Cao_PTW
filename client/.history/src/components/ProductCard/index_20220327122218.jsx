import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { formatCurrency } from 'utils';
import { AddShoppingCart, Favorite } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
   },
   originalPrice: {
      '&&': {
         color: theme.palette.text.secondary,
         textDecoration: 'line-through',
         fontSize: 16,
      },
   },
   salePrice: {
      '&&': {
         color: theme.palette.error.dark,
         fontSize: 20,
         marginRight: theme.spacing(2),
         fontWeight: 700,
      },
   },
   percent: {
      position: 'absolute',
      top: 0,
      left: 10,
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      lineHeight: '35px',
      fontSize: 13,
      textAlign: 'center',
      clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 50% 80%, 0% 100%)',
   },
   actions: {
      position: 'absolute',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      '& button': {
         backgroundColor: 'rgba(0,0,0,0.6)',
         color: '#fff',
      },
   },
}));

const ProductCard = ({ product }) => {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardMedia component='img' image={product.thumb} />
         <CardContent>
            {product.discountPercent !== 0 && <Box className={classes.percent}>-{product.discountPercent}%</Box>}

            <Typography gutterBottom component='p'>
               {product.name}
            </Typography>

            <Box>
               <Typography component={'span'} className={classes.salePrice}>
                  {formatCurrency(product.salePrice)}
               </Typography>
               {product.discountPercent !== 0 && (
                  <Typography className={classes.originalPrice} component={'span'}>
                     {formatCurrency(product.originalPrice)}
                  </Typography>
               )}
            </Box>
         </CardContent>
         <CardActions className={classes.actions}>
            <IconButton size='medium'>
               <AddShoppingCart fontSize='small' />
            </IconButton>
            <IconButton size='medium'>
               <Favorite fontSize='small' />
            </IconButton>
         </CardActions>
      </Card>
   );
};

ProductCard.propTypes = {
   product: PropTypes.object.isRequired,
};

export default ProductCard;
