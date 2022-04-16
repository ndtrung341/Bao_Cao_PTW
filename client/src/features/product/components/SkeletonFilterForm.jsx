import { Box, Skeleton } from '@mui/material';
import React from 'react';

const SkeletonFilterForm = () => {
   return (
      <>
         {Array(3)
            .fill()
            .map((_, index) => (
               <Box>
                  <Skeleton height={30} sx={{ mb: 0 }} />
                  <Skeleton height={20} sx={{ m: 0 }} />
                  <Skeleton height={20} sx={{ m: 0 }} width={'50%'} />
                  <Skeleton height={20} sx={{ m: 0 }} />
                  <Skeleton height={20} sx={{ m: 0 }} width={'50%'} />
                  <Skeleton height={20} sx={{ m: 0 }} />
                  <Skeleton height={20} sx={{ m: 0 }} width={'50%'} />
               </Box>
            ))}
      </>
   );
};

export default SkeletonFilterForm;
