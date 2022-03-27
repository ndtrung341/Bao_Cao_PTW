import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {},
}));

const ProductCard = ({ product }) => {
   console.log(product);
   return (
      <Card>
         <CardMedia component='img' image={product.thumb} />
         <CardContent>
            <Typography gutterBottom variant='subtitle1' component='p' lineHeight={0}>
               {product.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
               continents except Antarctica
            </Typography>
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
