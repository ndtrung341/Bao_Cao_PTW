import { Box } from '@mui/material';
import React from 'react';
import { LOGO } from 'constants';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      width: 90,
      marginRight: theme.spacing(2),
      flexGrow: 0,
      order: 0,
      [theme.breakpoints.up('md')]: {
         order: 1,
         flexGrow: 1,
      },
   },
}));

const HeaderLogo = () => {
   const classes = useStyles();
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               flexGrow: { md: 0, xs: 1 },
               order: { md: 0, xs: 1 },
               mr: 2,
               width: 90,
            }}
         >
            <img src={LOGO} alt="" width={100} />
         </Box>
      </>
   );
};

export default HeaderLogo;
