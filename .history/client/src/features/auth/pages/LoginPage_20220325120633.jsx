import { makeStyles, Paper } from '@material-ui/core';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';
import img from 'assets/img/login.png';

const useStyles = makeStyles((theme) => ({}));

const LoginPage = () => {
   const classes = useStyles();

   return (
      <Grid container direction={'row'}>
         <Grid item md={8} xs={0}>
            <Box>
               <img src={img} alt='' />
            </Box>
         </Grid>
         <Grid item md={4} xs={12}></Grid>
      </Grid>
   );
};

export default LoginPage;
