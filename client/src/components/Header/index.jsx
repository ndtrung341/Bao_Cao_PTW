import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/authSlice';

const Header = () => {
   const currentUser = useSelector(selectCurrentUser);

   return (
      <AppBar position='static' color='default'>
         <Container maxWidth='lg'>
            <Toolbar disableGutters sx={{ height: 80 }}>
               <HeaderLogo />
               <HeaderMenu isAdmin={currentUser?.role === 'admin'} />
               <HeaderRight currentUser={currentUser} />
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
