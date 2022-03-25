import { makeStyles, Paper, useTheme } from '@material-ui/core';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';
import img from 'assets/img/login.png';

const useStyles = makeStyles((theme) => ({
   thumb: {
      backgroundColor: theme.palette.primary.main,
      '&>img': {
         maxWidth: '100%',
      },
   },
}));

const LoginPage = () => {
   const classes = useStyles();
   return (
      <Grid container direction={'row-reverse'}>
         <Grid item md={7} xs={0}>
            <Box className={classes.thumb}>
               <img src={img} alt='' />
            </Box>
         </Grid>
         <Grid item md={5} xs={12}>
            123
         </Grid>
      </Grid>
   );
};

export default LoginPage;
