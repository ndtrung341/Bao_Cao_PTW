import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { register, selectIsLogging } from 'redux/authSlice';
import RegisterForm from 'components/Auth/RegisterForm';
import useModal from 'hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

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

const RegisterPage = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { modal } = useModal();
   const isLogging = useSelector(selectIsLogging);

   const handleRegister = async (values) => {
      try {
         const { fullname, email, password } = values;

         const payload = { fullname, email, password };
         const resultRegister = await dispatch(register(payload));
         unwrapResult(resultRegister);

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
               <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <img src={'/images/logo76.png'} alt='' />
               </Link>
            </Box>
            <RegisterForm onRegister={handleRegister} />
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

export default RegisterPage;
