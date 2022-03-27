import { Box, Typography } from '@mui/material';
import React from 'react';

const TitleSection = ({ title, subTitle }) => {
   return (
      <Box>
         <Typography>{title}</Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;
