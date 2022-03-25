import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeaderRight = () => {
   return (
      <Box sx={{ flexGrow: 0 }}>
         {/* <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                           alt="Remy Sharp"
                           src={AVATAR_DEFAULT}
                           sx={{ width: 45, height: 45 }}
                        />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     className={classes.menu}
                     id="menu-appbar"
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
                  </Menu> */}
         <Button variant="contained" size="small">
            Đăng nhập
         </Button>
      </Box>
   );
};

export default HeaderRight;
