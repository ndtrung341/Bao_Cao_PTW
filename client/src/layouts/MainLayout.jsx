import { NoLuggageOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import DialogContainer from 'components/Common/ConfirmDialog';
import Footer from 'components/Common/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const MainLayout = () => {
   const location = useLocation();
   const footerRef = useRef(null);
   const contentRef = useRef(NoLuggageOutlined);

   useEffect(() => {
      setTimeout(() => {
         const footerHeight = footerRef.current.offsetHeight;
         const headerHeight = 80;
         // console.log(footerHeight);
         contentRef.current.style.minHeight = `calc(100vh - ${
            footerHeight + headerHeight
         }px)`;
      }, 100);
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   return (
      <>
         <Header />
         <Box ref={contentRef}>
            <Outlet />
         </Box>
         <Footer ref={footerRef} />

         <ToastContainer
            position='top-center'
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover={false}
         />

         <DialogContainer />
      </>
   );
};

export default MainLayout;
