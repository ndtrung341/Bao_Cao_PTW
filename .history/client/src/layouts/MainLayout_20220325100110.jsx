import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   const headerRef = useRef();
   const footerRef = useRef();

   useEffect(() => {}, []);

   return (
      <>
         <Header />
         <Box>
            <Outlet />
         </Box>
         <Footer />
      </>
   );
};

export default MainLayout;
