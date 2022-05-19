import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ title, menu = [] }) => {
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
            sx={{ color: '#000', '&&': { m: 0 } }}
         >
            {title}
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
            {menu.map((item, index) => (
               <MenuItem key={index}>
                  <Link to={item.url} style={{ color: '#000' }} onClick={handleClose}>
                     {item.name}
                  </Link>
               </MenuItem>
            ))}
         </Menu>
      </>
   );
};

export default DropdownMenu;
