import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { getPathPublic } from 'utils';

const Forbidden = () => {
   return (
      <Container>
         <Grid container>
            <Grid item md={3} xs={12} alignItems='center'>
               <Box sx={{ width: { xs: 300 } }}>
                  <img src={getPathPublic('404.png')} alt='' width='100%' />
               </Box>
            </Grid>
            <Grid item md={9} xs={12}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '100%',
                  }}
               >
                  <Typography variant='h4' align='center' mb={4}>
                     403
                     <br />
                     Bạn không được phép truy cập
                  </Typography>
                  <Button variant='contained'>Về trang chủ</Button>
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Forbidden;
