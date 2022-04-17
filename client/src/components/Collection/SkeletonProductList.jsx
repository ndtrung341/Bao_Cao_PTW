import { Grid } from '@mui/material';
import SkeletonProductCard from 'components/Common/SkeletonProductCard';
import React from 'react';

const SkeletonProductList = ({ length }) => {
   return (
      <Grid item container spacing={1}>
         {Array(length)
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
