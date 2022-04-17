import React, { useState } from 'react';
import {
   Close,
   LogoutOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
} from '@mui/icons-material';
import {
   Avatar,
   Badge,
   Button,
   Dialog,
   DialogContent,
   DialogTitle,
   Divider,
   IconButton,
   ListItemIcon,
   ListItemText,
   Menu,
   MenuItem,
   TextField,
   Tooltip,
} from '@mui/material';
import { SETTING_LINKS } from 'constants';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectCartCount } from 'redux/cartSlice';
import { getPathPublic } from 'utils';

const HeaderRight = () => {
   const cartCount = useSelector(selectCartCount);

   const [anchorElUser, setAnchorElUser] = useState(null);
   const [openSearch, setOpenSearch] = useState(false);

   const isLoggedIn = false;

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const handleOpenSearch = () => {
      setOpenSearch(true);
   };

   const handleCloseSearch = () => {
      setOpenSearch(false);
   };

   return (
      <>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* search icon */}
            <IconButton onClick={handleOpenSearch}>
               <SearchOutlined />
            </IconButton>

            {/* cart icon */}
            <Link to='/cart' style={{ color: 'inherit' }}>
               <Badge color='primary' badgeContent={cartCount} sx={{ mr: 2 }}>
                  <ShoppingCartOutlined />
               </Badge>
            </Link>

            {!isLoggedIn ? (
               <Link to={'/auth/login'} style={{ textDecoration: 'none' }}>
                  <Button variant='outlined' size='small'>
                     Đăng nhập
                  </Button>
               </Link>
            ) : (
               <Box>
                  <Tooltip title='Open settings'>
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                           src={getPathPublic('avatar.png')}
                           sx={{ width: 40, height: 40 }}
                        />
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
            )}
         </Box>

         {/* search dialog */}
         <Dialog
            open={openSearch}
            onClose={handleCloseSearch}
            fullWidth
            PaperProps={{ sx: { top: '5%', position: 'absolute' } }}
         >
            <DialogTitle>TÌM KIẾM</DialogTitle>

            <IconButton
               sx={{ position: 'absolute', top: 10, right: 20 }}
               onClick={handleCloseSearch}
            >
               <Close color='error' />
            </IconButton>

            <DialogContent sx={{ pt: 0 }}>
               <Box component={'form'}>
                  <TextField
                     size='medium'
                     autoFocus
                     margin='dense'
                     variant='standard'
                     name='q'
                     placeholder='Nhập từ khóa ...'
                     type='text'
                     fullWidth
                     InputProps={{
                        disableUnderline: true,
                        startAdornment: <SearchOutlined color='primary' sx={{ mr: 1 }} />,
                     }}
                  />
               </Box>
            </DialogContent>
         </Dialog>
      </>
   );
};

export default HeaderRight;
