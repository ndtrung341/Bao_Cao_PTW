import { Card, Skeleton } from '@mui/material';
import React from 'react';

const SkeletonProductCard = () => {
   return (
      <Card elevation={0}>
         <Skeleton variant='rectangular' height={200} />
         <Skeleton component={'p'} />
         <Skeleton component={'p'} width='80%' />
         <Skeleton component={'p'} width='50%' />
      </Card>
   );
};

export default SkeletonProductCard;
