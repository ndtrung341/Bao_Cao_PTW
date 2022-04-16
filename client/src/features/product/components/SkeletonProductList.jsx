import { Grid } from '@mui/material';
import SkeletonProductCard from 'components/ProductCard/SkeletonProductCard';
import React from 'react';

const SkeletonProductList = () => {
   return (
      <Grid item container spacing={1}>
         {Array(12)
            .fill()
            .map((_, index) => (
               <Grid item key={index} lg={3} md={4} xs={6}>
                  <SkeletonProductCard />
               </Grid>
            ))}
      </Grid>
   );
};

export default SkeletonProductList;
