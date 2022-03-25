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
      backgroundColor: theme.palette.background.default,
   },
   wrapper: {
      '&&': {
         minWidth: '80vw',
         minHeight: '50vw',
         padding: theme.spacing(2),
         backgroundColor: '#fff',
         borderRadius: theme.shape.borderRadius,
         boxShadow: theme.shadows[10],
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
