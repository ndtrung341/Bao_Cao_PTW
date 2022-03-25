import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';

const Header = (props) => {
   return (
      <AppBar position="static" color="default">
         <Container>
            <Toolbar disableGutters>
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
