import { Container, Box, Grid } from '@mui/material';
import React from 'react';
import img from 'assets/img/footer.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   root: {
      backgroundPosition: 'left center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
   },
}));
const Footer = () => {
   const classes = useStyles();
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
