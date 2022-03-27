import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',
   },
   title: {
      color: theme.palette.primary.main,
      wordSpacing: '1.2',
      textTransform: 'upppercase',
   },
}));

const TitleSection = ({ title, subTitle }) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Typography variant='h2' className={classes.title}>
            {title}
         </Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;
