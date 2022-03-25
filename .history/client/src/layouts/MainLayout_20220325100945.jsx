import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   const footerRef = useRef();
   const contentRef = useRef();

   useEffect(() => {
      const footerHeight = footerRef.current.innerHeight || 0;
      const headerHeight = 80;
      contentRef.current?.style.minHeight = `calc(100vh - ${footerHeight+headerHeight}px)`;
   }, []);

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
