import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   const footerRef = useRef();

   useEffect(() => {}, []);

   return (
      <>
         <Header />
         <Box>
            <Outlet />
         </Box>
         <Footer ref={footerRef} />
      </>
   );
};

export default MainLayout;
