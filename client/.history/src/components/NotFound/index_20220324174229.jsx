import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from 'assets/img/404.png';
const NotFound = () => {
   return (
      <Box>
         <Container maxWidth='lg'>
            <Grid container>
               <Grid item md={4}>
                  <img src={img} alt='' />
               </Grid>
               <Grid item md={8}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <Typography variant='h3' center>
                        Rất tiếc! Không tìm thấy trang
                     </Typography>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default NotFound;
