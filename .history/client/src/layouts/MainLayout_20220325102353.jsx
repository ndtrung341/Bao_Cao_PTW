import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   const [height, setHeight] = useState(0);
   const footerRef = useRef();
   const contentRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         const footerHeight = footerRef.current.clientHeight || 0;
         const headerHeight = 80;
         contentRef.current.style.minHeight = `calc(100vh - ${footerHeight + headerHeight}px)`;
      }, 1);
   }, []);

   return (
      <>
         <Header />
         <Box ref={contentRef}>
            {height}
            <Outlet />
         </Box>
         <Footer ref={footerRef} />
      </>
   );
};

export default MainLayout;
