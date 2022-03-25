import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from 'assets/img/404.png';
const NotFound = () => {
   return (
      <Box>
         <Container maxWidth='md'>
            <Grid container>
               <Grid item md={4}>
                  <img src={img} alt='' />
               </Grid>
               <Grid item md={8}>
                  <Typography variant='h2' center>
                     Rất tiếc! Không tìm thấy Trang
                  </Typography>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default NotFound;
