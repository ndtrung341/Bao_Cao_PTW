import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, ListItem, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import { LOGO, NAV_LINKS, AVATAR_DEFAULT } from 'constants';
import { SETTING_LINKS } from 'constants';
import { LogoutOutlined } from '@mui/icons-material';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.grey[100],
   },
   logo: {
      width: 90,
      marginRight: theme.spacing(2),
      '&>img': {
         maxWidth: '100%',
         height: 'auto',
         objectFit: 'cover',
      },
   },
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

const Header = (props) => {
   const classes = useStyles();
   const theme = useTheme();
   console.log(theme);

   return (
      <AppBar position="static" color="default">
         <Container className={classes.root}>
            <Toolbar disableGutters>
               <HeaderLogo />
               <HeaderMenu />
               <HeaderRight />
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
