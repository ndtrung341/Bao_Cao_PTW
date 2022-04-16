import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_LINKS } from 'constants';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import axiosClient from 'api/axiosClient';
import categoryApi from 'api/categoryApi';
import { useSelector } from 'react-redux';
import {
   selectCategoryList,
   selectCategoryParentList,
} from 'features/category/categorySlice';

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
      color: theme.palette.common.black,
      textTransform: 'none',
      textDecoration: 'none',
      '&.active': {
         color: theme.palette.primary.main,
      },
   },
}));

const HeaderMenu = () => {
   const classes = useStyles();
   // const parentCategoryList = useSelector(selectCategoryParentList);
   // console.log(parentCategoryList);
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   // const [anchorElMenu, setAnchorElMenu] = React.useState(null);

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
            {NAV_LINKS.map((item) => (
               <Button key={item.name} onClick={handleCloseNavMenu}>
                  <NavLink to={item.path} className={classes.link}>
                     {item.name}
                  </NavLink>
               </Button>
            ))}
            {/* <Button>
               <NavLink to={'/'} className={classes.link}>
                  Trang chủ
               </NavLink>
            </Button>
            {parentCategoryList.map((item) => (
               <Button key={item.id}>
                  <NavLink
                     to={'/product/list/' + item.slug}
                     className={classes.link}
                     state={{ parentId: item.id }}
                  >
                     {item.name}
                  </NavLink>
               </Button>
            ))} */}
         </Box>
      </>
   );
};

export default HeaderMenu;
