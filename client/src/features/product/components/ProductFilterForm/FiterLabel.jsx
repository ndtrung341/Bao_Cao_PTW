import { Box, Typography } from '@mui/material';
import React from 'react';
const FilterLabel = ({ children }) => {
   return (
      <Box display='flex' alignItems={'center'} justifyContent={'space-between'}>
         <Typography variant='body2' p={2} sx={{ textTransform: 'uppercase', fontWeight: 700 }}>
            {children}
         </Typography>
      </Box>
   );
};

export default FilterLabel;
