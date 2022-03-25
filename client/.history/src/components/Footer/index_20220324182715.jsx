import { Container, Box, Grid } from '@mui/material';
import React from 'react';
import img from 'assets/img/footer.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   root: {
      backgroundImage: `url(https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=100)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relatite',
      '&::before': {
         position: 'absolute',
         width: '100%',
         height: '100%',
         top: 0,
         left: 0,
         zIndex: -1,
      },
   },
}));
const Footer = () => {
   const classes = useStyles({ img });
   return (
      <Box className={classes.root}>
         <Container>
            <Grid container>
               <Grid item lg={3} md={3} xs={2}></Grid>
               <Grid item lg={3} md={3} xs={2}></Grid>
               <Grid item lg={3} md={3} xs={2}></Grid>
               <Grid item lg={3} md={3} xs={2}></Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default Footer;
