import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import img from 'assets/img/404.png';
const NotFound = () => {
   return (
      <Box>
         <Container maxWidth='md'>
            <Grid container>
               <Grid item>
                  <img src={img} alt='' />
               </Grid>
               <Grid item></Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default NotFound;
