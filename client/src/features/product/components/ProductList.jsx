import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';

const ProductList = ({ productList }) => {
   return (
      <Grid item container spacing={1}>
         {productList.map((item) => (
            <Grid item key={item.id} lg={3} md={4} xs={6}>
               <ProductCard product={item} />
            </Grid>
         ))}
      </Grid>
   );
};

ProductList.propTypes = {};

export default ProductList;
