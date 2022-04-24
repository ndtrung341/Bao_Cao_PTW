import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react';
import { authApi } from 'api/authApi';
import { register, getMe, selectIsLogging } from 'redux/authSlice';
import RegisterForm from 'components/Auth/RegisterForm';
import { getPathPublic } from 'utils';
import useModal from 'hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

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

const RegisterPage = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { modal } = useModal();
   const isLogging = useSelector(selectIsLogging);

   const checkUniqueEmail = async (email) => {
      const { error, error_msg } = await authApi.checkUniqueEmail(email);
      error &&
         modal({
            type: 'error',
            title: 'Thất bại',
            content: error_msg,
         });
      return error === false;
   };

   const handleRegister = async (values) => {
      try {
         const { fullname, email, password } = values;

         const isValid = await checkUniqueEmail(email);
         if (!isValid) return;

         const payload = { fullname, email, password };
         await dispatch(register(payload)).unwrap();

         const resultGetMe = await dispatch(getMe());
         unwrapResult(resultGetMe);

         return navigate('/');
      } catch (error) {
         modal({
            type: 'error',
            title: 'Lỗi',
            content: 'Có lỗi xảy ra, vui lòng thử lại',
         });
      }
   };

   return (
      <Grid container>
         <Grid item md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box className={classes.thumb} width='100%'>
               <img src={getPathPublic('register.png')} alt='' />
            </Box>
         </Grid>

         <Grid item md={5} xs={12} flexShrink={0} sx={{ background: '#fff' }}>
            <Box className={classes.wrapper}>
               <Box className={classes.header}>
                  <Typography
                     align='center'
                     variant='h6'
                     color={'primary'}
                     textTransform='uppercase'
                     fontWeight={'700'}
                  >
                     Đăng ký
                  </Typography>
                  <img src={getPathPublic('logo.png')} alt='' />
               </Box>
               <RegisterForm onRegister={handleRegister} />
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

export default RegisterPage;
