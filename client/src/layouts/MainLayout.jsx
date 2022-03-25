import { Box } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         <Box>{children}</Box>
         <Footer />
      </>
   );
};

export default MainLayout;
