import { Container, Box, Grid } from '@mui/material';
import React from 'react';
import img from 'assets/img/footer.png';
import { makeStyles } from '@material-ui/core';
const styles = makeStyles((img) => ({
   root: {
      backgroundImage: img,
      backgroundRepeat: 'no-repeat',
      height: 200,
   },
}));
const Footer = () => {
   const classes = makeStyles(img);
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
