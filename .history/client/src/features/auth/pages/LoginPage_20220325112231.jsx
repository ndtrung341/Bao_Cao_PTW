import { makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.paper,
   },
   wrapper:{
      padding:theme.spacing.
   }
}));

const LoginPage = () => {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <Paper elevation={1}>
            <LoginForm />
         </Paper>
      </Box>
   );
};

export default LoginPage;
