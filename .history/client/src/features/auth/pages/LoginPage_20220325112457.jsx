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
   wrapper: {
      padding: theme.spacing(2),
      backgroundColor: '#fff',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[6],
   },
}));

const LoginPage = () => {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <Paper className={classes.wrapper}>
            <LoginForm />
         </Paper>
      </Box>
   );
};

export default LoginPage;
