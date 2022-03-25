import { makeStyles, Paper } from '@material-ui/core';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({}));

const LoginPage = () => {
   const classes = useStyles();

   return (
      <Container>
         <Grid container>
            <Grid item></Grid>
            <Grid item></Grid>
         </Grid>
      </Container>
   );
};

export default LoginPage;
