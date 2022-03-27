import { Box, Container } from '@mui/material';
import React from 'react';

const Section = ({ children }) => {
   return (
      <Box component={'section'} py={2} pb={3}>
         <Container>{children}</Container>
      </Box>
   );
};

export default Section;
