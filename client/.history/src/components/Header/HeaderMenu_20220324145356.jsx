import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_LINKS } from 'constants';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   menu: {
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      '&>button': {
         margin: theme.spacing(0, 1),
         color: 'inherit',
         display: 'block',
         textTransform: 'none',
         fontSize: theme.typography.htmlFontSize,
      },
   },
}));

const HeaderMenu = () => {
   const classes = useStyles();

   const [anchorElNav, setAnchorElNav] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   return (
      <>
         {/* MENU MOBILE */}
         <Box sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
               size='large'
               aria-label='account of current user'
               aria-controls='menu-appbar'
               aria-haspopup='true'
               onClick={handleOpenNavMenu}
               color='inherit'
            >
               <MenuIcon />
            </IconButton>
            <Menu
               id='menu-appbar'
               anchorEl={anchorElNav}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{
                  display: { xs: 'block', md: 'none' },
               }}
            >
               {NAV_LINKS.map((item) => (
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                     <NavLink to={item.path} onClick={handleCloseNavMenu}>
                        {item.name}
                     </NavLink>
                  </MenuItem>
               ))}
            </Menu>
         </Box>
         {/* END MENU MOBILE */}

         {/* MENU PC */}
         <Box sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'none', md: 'flex' } }} className={classes.menu}>
            {NAV_LINKS.map((item, index) => (
               <NavLink key={index} to={item.path} onClick={handleCloseNavMenu}>
                  {item.name}
               </NavLink>
            ))}
         </Box>
      </>
   );
};

export default HeaderMenu;
