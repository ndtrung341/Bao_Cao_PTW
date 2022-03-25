import React, { useState } from 'react';
import { LogoutOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import {
   Avatar,
   Badge,
   Button,
   Divider,
   IconButton,
   ListItemIcon,
   ListItemText,
   Menu,
   MenuItem,
   Tooltip,
} from '@mui/material';
import { SETTING_LINKS, AVATAR_DEFAULT } from 'constants';
import { Link, Navigate } from 'react-router-dom';
import { Box } from '@mui/system';

const HeaderRight = () => {
   const [anchorElUser, setAnchorElUser] = useState(null);
   const isLoggedIn = true;

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   if (!isLoggedIn) {
      return (
         <Link to={'/user/login'} style={{ textDecoration: 'none' }}>
            <Button variant='outlined' size='medium'>
               Đăng nhập
            </Button>
         </Link>
      );
   }

   return (
      <Box sx={{ display: 'flex' }}>
         <Badge color='secondary' badgeContent={23}>
            <ShoppingCartOutlined />
         </Badge>
         <Box>
            <Tooltip title='Open settings'>
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={AVATAR_DEFAULT} sx={{ width: 45, height: 45 }} />
               </IconButton>
            </Tooltip>
            <Menu
               id='menu-appbar'
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
            >
               {SETTING_LINKS.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                     <ListItemIcon>{setting.icon}</ListItemIcon>
                     <ListItemText>{setting.name}</ListItemText>
                  </MenuItem>
               ))}
               <Divider />
               <MenuItem>
                  <ListItemIcon>
                     <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>Đăng xuất</ListItemText>
               </MenuItem>
            </Menu>
         </Box>
      </Box>
   );
};

export default HeaderRight;
