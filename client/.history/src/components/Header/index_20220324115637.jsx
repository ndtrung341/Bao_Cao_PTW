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
import { makeStyles } from '@material-ui/core/styles';
import { LOGO, NAV_LINKS } from 'constants';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.grey[100],
   },
   logo: {
      width: '100px',
      marginRight: theme.spacing(2),
      '&>img': {
         maxWidth: '100%',
         height: 'auto',
         objectFit: 'cover',
      },
   },
   menu: {
      color: theme.palette.text.secondary,
      '&>button': {
         margin: theme.spacing(0, 1),
         color: 'inherit',
         display: 'block',
         textTransform: 'none',
         fontSize: theme.typography.subtitle1,
      },
   },
}));

const Header = (props) => {
   const classes = useStyles();
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar position="static">
         <Container maxWidth="xl" className={classes.root}>
            <Toolbar disableGutters>
               <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.logo}>
                  <img src={LOGO} alt="" />
               </Box>

               {/* RESPONSIVE MOBILE */}
               <Box sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
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
                           <Typography textAlign="center">{item.name}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <img src={LOGO} alt="" width={100} />
               </Box>
               {/* END RESPONSIVE MOBILE */}

               <Box
                  sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'none', md: 'flex' } }}
                  className={classes.menu}
               >
                  {NAV_LINKS.map((item) => (
                     <Button key={item.name} onClick={handleCloseNavMenu}>
                        {item.name}
                     </Button>
                  ))}
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                     </IconButton>
                  </Tooltip>
                  <Menu
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
                     {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                           <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
