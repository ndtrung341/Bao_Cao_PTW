import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonInfo = () => {
   return (
      <>
         <Skeleton variant={'rectangular'} height={20} width={150} />
         <Skeleton variant='text' height={30} />
         <Skeleton variant='text' height={40} width={200} />
         <Skeleton variant={'rectangular'} height={150} />
      </>
   );
};

export default SkeletonInfo;
