import { makeStyles } from '@material-ui/core';
import { Box, Paper } from '@mui/material';
import ModalContainer from 'components/Common/ModalContainer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
   },
   wrapper: {
      '&&': {
         maxWidth: '30vw',
         height: '100%',
         backgroundColor: 'transparent',
         borderRadius: 8,
         boxShadow: theme.shadows[10],
         overflow: 'hidden',
         [theme.breakpoints.down('md')]: {
            maxWidth: '90vw',
         },
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
         <ModalContainer />
      </Box>
   );
};

export default FullScreenLayout;
