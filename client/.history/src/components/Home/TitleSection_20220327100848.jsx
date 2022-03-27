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
      letterSpacing:'1.2'
      textTransform: 'uppercase',
   },
}));

const TitleSection = ({ title, subTitle }) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Typography variant='h4' className={classes.title} fontWeight={600}>
            {title}
         </Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;
