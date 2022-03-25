import { Container, Box, Grid } from '@mui/material';
import React from 'react';
import img from 'assets/img/footer.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   root: {
      backgroundImage: (props) => `url(${props.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 200,
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
