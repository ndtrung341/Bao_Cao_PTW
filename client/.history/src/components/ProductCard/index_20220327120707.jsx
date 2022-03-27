import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { formatCurrency } from 'utils';

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
      right: 10,
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      lineHeight: '40px',
      fontSize: 12,
      textAlign: 'center',
      borderRight: '5px solid #fff',
      borderLeft: '5px solid #fff',
      clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 50% 80%, 0% 100%)',
   },
}));

const ProductCard = ({ product }) => {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardMedia component='img' image={product.thumb} />
         <CardContent>
            <Typography gutterBottom component='p'>
               {product.name}
            </Typography>

            <Box>
               <Typography component={'span'} className={classes.salePrice}>
                  {formatCurrency(product.salePrice)}
               </Typography>
               <Typography className={classes.originalPrice} component={'span'}>
                  {formatCurrency(product.originalPrice)}
               </Typography>
            </Box>
         </CardContent>
         <Box className={classes.percent}>-{product.discountPercent}%</Box>
         <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
         </CardActions>
      </Card>
   );
};

ProductCard.propTypes = {
   product: PropTypes.object.isRequired,
};

export default ProductCard;
