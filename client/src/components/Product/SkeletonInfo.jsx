import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonInfo = () => {
   return (
      <>
         <Skeleton variant={'rectangular'} height={25} width={150} />
         <Skeleton component={'h1'} height={40} />
         <Skeleton component={'h1'} height={50} width={200} />
         <Skeleton component={'p'} height={150} />
      </>
   );
};

export default SkeletonInfo;
