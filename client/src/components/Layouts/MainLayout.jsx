import ModalContainer from 'components/Common/ModalContainer';
import Footer from 'components/Common/Footer';
import Header from 'components/Header';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, selectCartIsUpdated } from 'redux/cartSlice';
import { getMe, selectIsLoggedIn } from 'redux/authSlice';
import { getToken } from 'utils/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home';

toast.configure();

const MainLayout = () => {
   const location = useLocation();
   const dispatch = useDispatch();
   const isUpdated = useSelector(selectCartIsUpdated);
   const isLoggedIn = useSelector(selectIsLoggedIn);

   // scroll to top
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   // fetch cart when changed
   // useEffect(() => {
   //    // console.log({ isUpdated });
   //    if (!isUpdated || !isLoggedIn) return;
   //    dispatch(fetchCart());
   // }, [isUpdated, isLoggedIn, dispatch]);

   useEffect(() => {
      // console.log({ isUpdated });
      if (!isUpdated || !isLoggedIn) return;
      dispatch(fetchCart());
   }, [isLoggedIn, dispatch, isUpdated]);

   // fetch user info
   // useEffect(() => {
   //    if (!getToken()) return;
   //    // console.log('fetch user');
   //    dispatch(getMe()).unwrap();
   // }, [location.pathname, dispatch]);

   useEffect(() => {
      if (!getToken()) return;
      dispatch(getMe()).unwrap();
   }, [location.pathname, dispatch]);

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
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

export default MainLayout;
