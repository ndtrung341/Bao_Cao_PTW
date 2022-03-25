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
      [theme.breakpoints.down('md')]: {
         order: 1,
         flexGrow: 1,
      },
   },
}));

const HeaderLogo = () => {
   const classes = useStyles();
   return (
      <>
         <Box className={classes.root}>
            <img src={LOGO} alt="" width={100} />
         </Box>
      </>
   );
};

export default HeaderLogo;
