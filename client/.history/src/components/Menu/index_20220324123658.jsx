import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu as MenuMui } from '@material-ui/core';
import { Typography } from '@mui/material';
const Menu = ({ children, className }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleCloseMenu = () => {
      setAnchorEl(null);
   };

   return (
      <MenuMui
         anchorEl={anchorEl}
         keepMounted
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={Boolean(anchorEl)}
         onClose={handleCloseMenu}
      >
         <MenuItem key={323} onClick={handleCloseMenu}>
            <Typography textAlign="center">{32}</Typography>
         </MenuItem>
      </MenuMui>
   );
};

Menu.propTypes = {};

export default Menu;
