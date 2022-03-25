import { Box } from '@mui/material';
import React from 'react';
import { LOGO } from 'constants';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   logo: {
      width: 90,
      marginRight: theme.spacing(2),
      '&>img': {
         maxWidth: '100%',
         height: 'auto',
         objectFit: 'cover',
      },
   },
}));
const HeaderLogo = () => {
   const classes = useStyles();
   return (
      <Box>
         {/* LOGO MOBILE */}
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src={LOGO} alt="" width={100} />
         </Box>
         {/* END LOGO MOBILE */}

         {/* LOGO PC - TABLET */}
         <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.logo}>
            <img src={LOGO} alt="" />
         </Box>
         {/* END LOGO PC - TABLET */}
      </Box>
   );
};

export default HeaderLogo;
