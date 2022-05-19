import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuDropdown = ({ title, menuList }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <Button
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            Thương hiệu
         </Button>
         <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            <Link to='/themes/creator-3-in-1' style={{ display: 'block' }} onClick={handleClose}>
               <Button>Creator 3 in 1</Button>
            </Link>
            <Link to='/themes/architecture' style={{ display: 'block' }} onClick={handleClose}>
               <Button>Architecture</Button>
            </Link>
            <Link to='/themes/batman' style={{ display: 'block' }} onClick={handleClose}>
               <Button>Batman</Button>
            </Link>
            <Link to='/themes/city' style={{ display: 'block' }} onClick={handleClose}>
               <Button>City</Button>
            </Link>
            <Link to='/themes/creator-expert' style={{ display: 'block' }} onClick={handleClose}>
               <Button>Creator Expert</Button>
            </Link>
         </Menu>
      </>
   );
};

export default MenuDropdown;
