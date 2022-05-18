import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_LINKS } from 'constants';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';

const useStyles = makeStyles((theme) => ({
   menu: {
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      '&>button': {
         margin: theme.spacing(0, 1),
         display: 'block',
         fontSize: theme.typography.htmlFontSize,
      },
   },
   link: {
      color: '#000',
      textDecoration: 'none',
      '&.active': {
         color: theme.palette.primary.main,
         background: 'rgba(63, 63, 219, 0.04)',
      },
      '&>button': {
         color: 'inherit',
      },
   },
}));

const HeaderMenu = ({ isAdmin }) => {
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
                     <Typography textAlign='center'>{item.name}</Typography>
                  </MenuItem>
               ))}
            </Menu>
         </Box>
         {/* END MENU MOBILE */}

         {/* MENU */}
         <Box
            sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'none', md: 'flex' } }}
            className={classes.menu}
         >
            {/* {NAV_LINKS.map((item) => (
               <NavLink to={item.path} key={item.name} className={classes.link}>
                  <Button>{item.name}</Button>
               </NavLink>
            ))} */}
            <NavLink to={'/'} className={classes.link}>
               <Button>Trang chủ</Button>
            </NavLink>
            <MenuDropdown />
            {isAdmin && (
               <NavLink to={'/admin'} className={classes.link}>
                  <Button> Admin Panel</Button>
               </NavLink>
            )}
         </Box>
      </>
   );
};

export default HeaderMenu;
