import React from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuMui } from '@material-ui/core/Menu';
const Menu = (props) => {
   return (
      <MenuMui
         className={classes.menu}
         id="menu-appbar"
         anchorEl={anchorElUser}
         anchorOrigin={{
            vertical: 'top',
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
         <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting.name}</Typography>
         </MenuItem>
      </MenuMui>
   );
};

Menu.propTypes = {};

export default Menu;
