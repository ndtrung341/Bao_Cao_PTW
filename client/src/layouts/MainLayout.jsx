import { NoLuggageOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

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
      </>
   );
};

export default MainLayout;
