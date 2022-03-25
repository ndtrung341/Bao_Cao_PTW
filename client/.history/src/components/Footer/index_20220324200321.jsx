import {
   Container,
   Box,
   Grid,
   Typography,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   IconButton,
   ButtonGroup,
   Button,
   OutlinedInput,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { LOGO_DARK as LOGO } from 'constants';
import { Email, LocalPhone, LocationOn, LocationOnOutlined } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=100")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center right',

      '& *': {
         color: '#fff',
      },
   },
   list: {
      fontSize: 14,
      paddingTop: theme.spacing(2),
      '&&>*': {
         padding: theme.spacing(0),
         paddingTop: theme.spacing(1),
      },
   },
   title: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 'bold !important',
      letterSpacing: 1.2,
   },
   icon: {
      '&&&': {
         padding: 0,
         minWidth: 40,
         height: 40,
         backgroundColor: '#3f3fdb',
         color: '#fff',
         fontSize: 18,
         marginRight: theme.spacing(1),
         marginTop: theme.spacing(2),
      },
   },
   button: {
      '&&&': {
         backgroundColor: '#3f3fdb',
         color: '#fff',
         fontSize: 18,
      },
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
                     <img src={LOGO} alt='' width={250}></img>
                  </Box>
                  <List>
                     <ListItem>
                        <LocationOnOutlined sx={{ mr: 2 }} />
                        <ListItemText>73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long</ListItemText>
                     </ListItem>
                     <ListItem>
                        <LocalPhone sx={{ mr: 2 }} />

                        <ListItemText>123456789</ListItemText>
                     </ListItem>
                     <ListItem>
                        <Email sx={{ mr: 2 }} />
                        <ListItemText>vlute@gmail.com</ListItemText>
                     </ListItem>
                  </List>
               </Grid>

               <Grid item lg={2} md={3} xs={2}>
                  <Box mt={4}>
                     <Typography variant='subtitle1' className={classes.title}>
                        Về chúng tôi
                     </Typography>
                     <List className={classes.list}>
                        <ListItem>
                           <Typography>Trang chủ</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Sản phẩm</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Tin tức</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Liên hệ</Typography>
                        </ListItem>
                     </List>
                  </Box>
               </Grid>

               <Grid item lg={2} md={3} xs={2}>
                  <Box mt={4}>
                     <Typography variant='subtitle1' className={classes.title}>
                        Chính sách
                     </Typography>
                     <List className={classes.list}>
                        <ListItem>
                           <Typography>Trang chủ</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Sản phẩm</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Tin tức</Typography>
                        </ListItem>
                        <ListItem>
                           <Typography>Liên hệ</Typography>
                        </ListItem>
                     </List>
                  </Box>
               </Grid>

               <Grid item lg={3} md={3} xs={2}>
                  <Box mt={4}>
                     <Typography variant='subtitle1' className={classes.title}>
                        Theo dõi chúng tôi
                     </Typography>
                     <Box>
                        <Button className={classes.icon}>
                           <i class='fa-brands fa-facebook-f'></i>
                        </Button>
                        <Button className={classes.icon}>
                           <i class='fa-brands fa-youtube'></i>
                        </Button>
                        <Button className={classes.icon}>
                           <i class='fa-brands fa-instagram'></i>
                        </Button>
                     </Box>
                     <Typography variant='subtitle1' className={classes.title} mt={2}>
                        Đăng ký nhận tin
                     </Typography>
                     <Box>
                        <OutlinedInput placeholder='Nhập địa chỉ email' />
                        <Button className={classes.button}>Gửi</Button>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default Footer;
