import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles(theme=>({

   root:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'm
      minHeight:'100vh',
      backgroundColor:theme.palette.background.paper,
   }
}))

const LoginPage = () => {
   return (
      <Box sx={{ display:'flex' }}>
         <LoginForm />
      </Box>
   );
};

export default LoginPage;
