import { Container, Box, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
   return (
      <Box>
         <Container>
            <Grid container>
               <Grid item lg={3} md={3} xs={2}></Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default Footer;
