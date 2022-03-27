import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',
   },
   title: {},
}));

const TitleSection = ({ title, subTitle }) => {
   return (
      <Box>
         <Typography>{title}</Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;
