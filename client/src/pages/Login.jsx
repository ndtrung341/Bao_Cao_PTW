import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import { getPathPublic } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, login, selectIsLogging } from 'redux/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   thumb: {
      padding: theme.spacing(5),
      '&>img': {
         maxWidth: '100%',
         width: '100%',
         height: 'auto',
         objectFit: 'cover',
      },
   },
   wrapper: {
      padding: theme.spacing(2),
      '& img': {
         display: 'block',
         width: 120,
      },
   },
   header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
   },
}));

const Login = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const isLogging = useSelector(selectIsLogging);

   const handleLogin = async (values) => {
      const resultLogin = await dispatch(login(values));
      unwrapResult(resultLogin);

      const resultGetMe = await dispatch(getMe());
      unwrapResult(resultGetMe);

      return navigate('/');
   };

   return (
      <Grid container direction={'row-reverse'}>
         <Grid item md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box className={classes.thumb} width='100%'>
               <img src={getPathPublic('login.png')} alt='' />
            </Box>
         </Grid>

         <Grid item md={5} xs={12} sx={{ background: '#fff' }}>
            <Box className={classes.wrapper}>
               <Box className={classes.header}>
                  <Typography
                     align='center'
                     variant='h6'
                     color={'primary'}
                     textTransform='uppercase'
                     fontWeight={'700'}
                  >
                     Đăng nhập
                  </Typography>
                  <img src={getPathPublic('logo.png')} alt='' />
               </Box>
               <LoginForm onLogin={handleLogin} />
            </Box>
         </Grid>

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLogging}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </Grid>
   );
};

export default Login;
