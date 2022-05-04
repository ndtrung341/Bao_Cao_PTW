import React, { useEffect } from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getMe } from 'redux/authSlice';
import { getToken } from 'utils/auth';

toast.configure();

const AdminLayout = () => {
   const dispatch = useDispatch();

   // fetch user info
   useEffect(() => {
      if (!getToken()) return;
      console.log('fetch user');
      dispatch(getMe()).unwrap();
   });

   return (
      <>
         <Header />

         <Outlet />

         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
         />
      </>
   );
};

export default AdminLayout;
