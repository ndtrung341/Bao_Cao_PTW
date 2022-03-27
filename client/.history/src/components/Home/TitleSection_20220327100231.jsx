import { makeStyles, useTheme } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',
   },
   title: {
      color: '',
   },
}));

const TitleSection = ({ title, subTitle }) => {
   const classes = useStyles();
   const theme = useTheme();
   console.log(theme.palette.primary.main);
   return (
      <Box className={classes.root}>
         <Typography>{title}</Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;
