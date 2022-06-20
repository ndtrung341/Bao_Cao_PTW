import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   logo: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(2),
      maxWidth: '250px',
      height: '100%',
   },
}));
const HeaderLogo = () => {
   const classes = useStyles();
   return (
      <>
         <Link to='/' className={classes.logo}>
            <Box
               height='100%'
               py={1}
               // sx={{
               //    display: 'flex',
               //    alignItems: 'center',
               //    flexGrow: { md: 0, xs: 1 },
               //    order: { md: 0, xs: 1 },
               //    mr: 2,
               //    height: '100%',
               // }}
            >
               <img
                  src='/images/logo.svg'
                  alt=''
                  width={200}
                  style={{ objectFit: 'contain', height: '100%' }}
               />
            </Box>
         </Link>
      </>
   );
};

export default HeaderLogo;
