import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         <Box>{children} 123</Box>
         <Outlet />

         <Footer />
      </>
   );
};

export default MainLayout;
