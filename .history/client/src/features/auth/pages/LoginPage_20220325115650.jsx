import { makeStyles, Paper } from '@material-ui/core';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({}));

const LoginPage = () => {
   const classes = useStyles();

   return (
      <Grid container>
         <Grid item>123</Grid>
         <Grid item></Grid>
      </Grid>
   );
};

export default LoginPage;
