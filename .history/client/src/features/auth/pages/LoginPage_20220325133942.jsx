import { makeStyles, Paper, useTheme } from '@material-ui/core';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';
import img from 'assets/img/register-landing-page.png';
import { LOGO } from 'constants';
const useStyles = makeStyles((theme) => ({
   thumb: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      '&>img': {
         maxWidth: '100%',
         width: '100%',
         height: 'auto',
      },
   },
   wrapper: {
      padding: theme.spacing(2),
      '& img': {
         display: 'block',
         width: 150,
         margin: 'auto',
      },
   },
}));

const LoginPage = () => {
   const classes = useStyles();
   return (
      <Grid container direction={'row-reverse'}>
         <Grid item md={5} xs={0}>
            <Box className={classes.thumb}>
               <img src={img} alt='' />
            </Box>
         </Grid>
         <Grid item md={7} xs={12}>
            <Box className={classes.wrapper}>
               <img src={LOGO} alt='' />
               <Typography align='center' variant='h6'>
                  Đăng nhập
               </Typography>
            </Box>
         </Grid>
      </Grid>
   );
};

export default LoginPage;
