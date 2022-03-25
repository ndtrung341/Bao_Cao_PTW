import { makeStyles } from '@material-ui/core';
import { Box, Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: theme.palette.primary.light,
   },
   wrapper: {
      '&&': {
         minWidth: '60vw',
         maxWidth: '100vw',
         height: '100%',
         backgroundColor: '#fff',
         borderRadius: 8,
         boxShadow: theme.shadows[10],
         overflow: 'hidden',
      },
   },
}));

const FullScreenLayout = ({ children }) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Paper className={classes.wrapper}>
            <Outlet />
         </Paper>
      </Box>
   );
};

export default FullScreenLayout;
