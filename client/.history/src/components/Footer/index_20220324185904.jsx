import { Container, Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { LOGO_DARK as LOGO } from 'constants';
import { LocationOn, LocationOnOutlined } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=100")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'top right',
      color: '#fff',
   },
}));

const Footer = () => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Container>
            <Grid container>
               <Grid item lg={5} md={3} xs={2}>
                  <Box>
                     <img src={LOGO} alt='' width={300}></img>
                  </Box>
                  <List>
                     <ListItem>
                        <ListItemIcon>
                           <LocationOnOutlined color='inherit' />
                        </ListItemIcon>
                        <ListItemText>73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long</ListItemText>
                     </ListItem>
                     <ListItem>
                        <ListItemIcon>
                           <LocationOn />
                        </ListItemIcon>
                        <ListItemText>73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long</ListItemText>
                     </ListItem>
                     <ListItem>
                        <ListItemIcon>
                           <LocationOn />
                        </ListItemIcon>
                        <ListItemText>73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long</ListItemText>
                     </ListItem>
                  </List>
               </Grid>
               <Grid item lg={2} md={3} xs={2}></Grid>
               <Grid item lg={2} md={3} xs={2}></Grid>
               <Grid item lg={3} md={3} xs={2}></Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default Footer;
