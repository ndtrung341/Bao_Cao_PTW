import React, { useEffect } from 'react';
import Header from 'components/Header';
import { NavLink, Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getMe } from 'redux/authSlice';
import { getToken } from 'utils/auth';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { ADMIN_LINKS } from 'constants';
import ModalContainer from 'components/Common/ModalContainer';

toast.configure();

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   header: {
      position: 'fixed',
      width: '100%',
      zIndex: 999,
   },
   sidebar: {
      position: 'fixed',
      marginTop: 80,
      left: 0,
      top: 0,
      bottom: 0,
      height: '100%',
      minWidth: 250,
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2),
      background: '#f5f5f5',
   },
   link: {
      textDecoration: 'none',
      color: 'inherit',
      fontSize: 18,
      padding: theme.spacing(1, 2),
      display: 'block',
      marginBottom: 8,
      '&.active': {
         color: theme.palette.primary.main,
         background: 'rgba(63, 63, 219, 0.06)',
      },
   },
   content: {
      width: '100%',
      padding: theme.spacing(3, 6),
      marginTop: 80,
      marginLeft: 250,
   },
}));

const AdminLayout = () => {
   const dispatch = useDispatch();
   const classes = useStyles();

   // fetch user info
   useEffect(() => {
      if (!getToken()) return;
      console.log('fetch user');
      dispatch(getMe()).unwrap();
   });

   return (
      <>
         <div className={classes.header}>
            <Header />
         </div>

         <Box className={classes.root}>
            <Box className={classes.sidebar}>
               {ADMIN_LINKS.map((item) => (
                  <NavLink className={classes.link} key={item.path} to={item.path}>
                     {item.name}
                  </NavLink>
               ))}
            </Box>
            <Box className={classes.content}>
               <Outlet />
            </Box>
         </Box>

         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
         />
         <ModalContainer />
      </>
   );
};

export default AdminLayout;
