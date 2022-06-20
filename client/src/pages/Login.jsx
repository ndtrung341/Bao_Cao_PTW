import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { login, getMe, selectIsLogging } from 'redux/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link, useNavigate } from 'react-router-dom';
import useModal from 'hooks/useModal';
import { Helmet } from 'react-helmet-async';
const useStyles = makeStyles((theme) => ({
   wrapper: {
      padding: theme.spacing(2),
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
   const { modal } = useModal();

   const handleLogin = async (values) => {
      try {
         const resultLogin = await dispatch(login(values));
         unwrapResult(resultLogin);

         const getUser = await dispatch(getMe());
         const user = unwrapResult(getUser);

         if (!user.is_verified) {
            return navigate('/auth/verify_email', { state: { user }, replace: true });
         }

         return navigate('/');
      } catch (error) {
         modal({
            type: 'error',
            title: 'Lỗi',
            content: error.message,
         });
      }
   };

   return (
      <>
         <Helmet>
            <title>{'Đăng nhập'}</title>
         </Helmet>
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
               <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <img src={'/images/logo76.png'} alt='' />
               </Link>
            </Box>
            <LoginForm onLogin={handleLogin} />
         </Box>

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLogging}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </>
   );
};

export default Login;
