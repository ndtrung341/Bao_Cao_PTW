import { Container, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { LOGO } from 'constants';
const useStyles = makeStyles((theme) => ({
   root: {
      backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=100")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'top right',
   },
}));

const Footer = () => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Container>
            <Grid container>
               <Grid item lg={5} md={3} xs={2}>
                  <Box>
                     <img src={LOGO} alt=''></img>
                  </Box>
                  <Typography>73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long</Typography>
                  <Typography>123456789</Typography>
                  <Typography>vlute@gmail.com</Typography>
               </Grid>
               <Grid item lg={2} md={3} xs={2}></Grid>
               <Grid item lg={2} md={3} xs={2}></Grid>
               <Grid item lg={3} md={3} xs={2}></Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default Footer;
