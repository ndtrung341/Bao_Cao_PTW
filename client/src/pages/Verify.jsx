import { Backdrop, CircularProgress, Container, Typography } from '@mui/material';
import VerifyForm from 'components/Auth/VerifyForm';
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'redux/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authApi } from 'api/authApi';
toast.configure();

const Verify = () => {
   const user = useLocation().state?.user;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);
   const [code, setCode] = useState('');

   useEffect(() => {
      if (code.length !== 6) return;
      (async () => {
         try {
            setLoading(true);
            const verifyResult = await dispatch(verifyEmail({ userId: user.id, code }));
            unwrapResult(verifyResult);
            setLoading(false);
            return navigate('/', { replace: true });
         } catch (error) {
            setCode('');
            setLoading(false);
            toast.error(error.message);
            console.log(error);
         }
      })();
   }, [code, setCode]);

   if (!user) {
      return <Navigate to={'/'} replace={true} />;
   }

   const handleResendCode = async () => {
      try {
         setLoading(true);
         await authApi.resend({ userId: user.id });
         toast.success('Đã gửi lại mã');
      } catch (error) {
      } finally {
         setLoading(false);
      }
   };

   return (
      <Container sx={{ py: 3 }}>
         <Typography variant='h5' align='center' mb={2}>
            Xác thực tài khoản
         </Typography>
         <Typography variant='subtitle1' align='center' mb={3}>
            Mã xác minh đã gửi tới {user.email}
         </Typography>

         <VerifyForm length={6} onChange={(code) => setCode(code)} value={code} />

         <Typography variant='subtitle1' align='center' mt={3} onClick={handleResendCode}>
            Gửi lại
         </Typography>

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>

         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
         />
      </Container>
   );
};

export default Verify;
