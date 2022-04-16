import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';
import { useDispatch } from 'react-redux';
import { fetchCategoryList } from 'features/category/categorySlice';

const Header = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCategoryList());
   }, [dispatch]);

   return (
      <AppBar position='static' color='default'>
         <Container maxWidth='lg'>
            <Toolbar disableGutters sx={{ height: 80 }}>
               <HeaderLogo />
               <HeaderMenu />
               <Box sx={{ flexGrow: 0, order: { xs: 2, md: 0 } }}>
                  <HeaderRight />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
