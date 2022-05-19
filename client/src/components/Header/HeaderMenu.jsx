import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_LINKS } from 'constants';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

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

const brands = [
   { name: 'Architecture', url: '/themes/architecture' },
   { name: 'Batman', url: '/themes/batman' },
   { name: 'City', url: '/themes/city' },
   { name: 'Creator 3 in 1', url: '/themes/creator-3-in-1' },
   { name: 'Creator Expert', url: '/themes/creator-expert' },
];

const categories = [
   { name: 'Adults Welcome', url: '/categories/adults-welcome' },
   { name: 'Buildings', url: '/categories/buildings' },
   { name: 'Cars', url: '/categories/cars' },
];

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
            <NavLink to={'/'} className={classes.link}>
               <Button>Trang chủ</Button>
            </NavLink>
            <DropdownMenu title={'Thương hiệu'} menu={brands} />
            <DropdownMenu title={'Danh mục'} menu={categories} />
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
