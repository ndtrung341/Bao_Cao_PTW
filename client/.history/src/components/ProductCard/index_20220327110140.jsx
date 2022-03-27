import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {},
   orginalPrice: {},
}));

const ProductCard = ({ product }) => {
   const classes = useStyles();

   return (
      <Card>
         <CardMedia component='img' image={product.thumb} />
         <CardContent>
            <Typography gutterBottom component='p'>
               {product.name}
            </Typography>
            <Box className={classes.price}>
               <Typography color='error.main' mr={1}>
                  {product.discountPrice}
               </Typography>

               <Typography component={'span'}>{product.salePrice}</Typography>
            </Box>
         </CardContent>
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
