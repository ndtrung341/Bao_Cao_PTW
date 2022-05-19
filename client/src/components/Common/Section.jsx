import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',
   },
   title: {
      '&&': {
         padding: theme.spacing(0, 2),
         display: 'inline-block',
         letterSpacing: '2px',
         textTransform: 'uppercase',
         position: 'relative',
         color: theme.palette.primary.main,
      },
      '&:after,&:before': {
         content: '""',
         position: 'absolute',
         top: '50%',
         transform: 'translateY(-50%)',
         width: 75,
         height: 3,
         backgroundColor: 'currentColor',
      },
      '&:after': {
         left: '100%',
      },
      '&:before': {
         right: '100%',
      },
   },
}));

const TitleSection = ({ title, subtitle }) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Typography variant='h4' className={classes.title} fontWeight={600}>
            {title}
         </Typography>
         <Typography>{subtitle}</Typography>
      </Box>
   );
};

const Section = ({ title, subtitle, children }) => {
   return (
      <Container>
         <TitleSection title={title} subtitle={subtitle} />
         <Box component={'section'} py={2} pb={3}>
            {children}
         </Box>
      </Container>
   );
};

export default Section;
