import React from 'react';
import PropTypes from 'prop-types';
import {
   Box,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   IconButton,
   Rating,
   Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { formatCurrency, getFullPathImage } from 'utils';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useAddToCart from 'hooks/useAddToCart';

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100%',
      position: 'relative',
      '&:hover $actions': {
         transform: 'translateX(0)',
      },
      '&:hover': {
         boxShadow: theme.shadows[4],
      },
   },
   content: {
      display: 'flex',
      flexDirection: 'column',
   },
   title: {
      display: ' -webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
   },
   price: {
      '&&': {
         color: theme.palette.text.secondary,
         textDecoration: 'line-through',
         fontSize: 15,
      },
   },
   salePrice: {
      '&&': {
         color: theme.palette.error.dark,
         fontSize: 17,
         marginRight: theme.spacing(1),
         fontWeight: 700,
      },
   },
   percent: {
      position: 'absolute',
      top: 0,
      left: 10,
      width: 40,
      height: 40,
      backgroundColor: theme.palette.warning.main,
      color: '#fff',
      lineHeight: '35px',
      fontSize: 13,
      textAlign: 'center',
      clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 50% 80%, 0% 100%)',
   },

   actions: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      right: 10,
      top: 10,
      transform: 'translateX(120%)',
      transition: '.3s',
      '& button': {
         backgroundColor: 'rgba(0,0,0,0.5)',
         color: '#fff',
         margin: '4px 0',
         '&:hover': {
            backgroundColor: theme.palette.primary.main,
         },
      },
   },
}));

const ProductCard = ({ product }) => {
   const classes = useStyles();
   const { handleAddToCart } = useAddToCart();

   const handleAddCartClick = () => {
      // const newItem = {
      //    id: product.id,
      //    name: product.name,
      //    thumb: product.thumb,
      //    slug: product.slug,
      //    price: product.salePrice,
      //    quantity: 1,
      // };
      const newItem = {
         product_id: product.id,
         quantity: 1,
      };
      handleAddToCart(newItem);
   };

   return (
      <Card className={classes.root} elevation={0}>
         <CardMedia
            component='img'
            image={getFullPathImage(product.thumb)}
            sx={{ minHeight: 220 }}
         />
         <CardContent className={classes.content}>
            {product.discountPercent !== 0 && (
               <Box className={classes.percent}>-{product.discountPercent}%</Box>
            )}

            <Link
               to={`/${product.slug}`}
               className={classes.title}
               state={{ id: product.id }}
            >
               <Typography gutterBottom component='p'>
                  {product.name}
               </Typography>
            </Link>

            <Box my={1}>
               <Typography component={'span'} className={classes.salePrice}>
                  {formatCurrency(product.salePrice)}
               </Typography>
               {product.discountPercent !== 0 && (
                  <Typography className={classes.price} component={'span'}>
                     {formatCurrency(product.price)}
                  </Typography>
               )}
            </Box>

            <Rating
               name='read-only'
               value={4}
               readOnly
               sx={{ mt: 'auto' }}
               size='small'
            />
         </CardContent>

         <CardActions className={classes.actions} disableSpacing>
            <IconButton size='medium' onClick={handleAddCartClick}>
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
