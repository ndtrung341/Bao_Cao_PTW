import {
   Container,
   Box,
   Grid,
   Typography,
   List,
   ListItem,
   ListItemText,
   Button,
   OutlinedInput,
} from '@mui/material';
import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { LOGO_DARK as LOGO } from 'constants';
import { Email, LocalPhone, LocationOnOutlined } from '@mui/icons-material';
import img from 'assets/img/footer.png';
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(3, 0),
      backgroundImage: ` url("${img}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      '& *': {
         color: '#fff',
      },
   },
   list: {
      fontSize: 14,
      paddingTop: theme.spacing(2),
      '&&>*': {
         padding: theme.spacing(0),
         paddingTop: theme.spacing(2),
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
         color: '#fff',
         fontSize: 18,
         padding: theme.spacing(1, 2),
      },
   },
   input: {
      backgroundColor: '#fff',
   },
}));

const Footer = (props, ref) => {
   const classes = useStyles();
   return (
      <Box className={classes.root} ref={ref}>
         <Container>
            <Grid container>
               <Grid item lg={5} md={3} xs={12}>
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

               <Grid item lg={2} md={3} xs={6}>
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

               <Grid item lg={2} md={3} xs={6}>
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

               <Grid item lg={3} md={3} xs={12}>
                  <Box mt={4}>
                     <Typography variant='subtitle1' className={classes.title}>
                        Theo dõi chúng tôi
                     </Typography>
                     <Box>
                        <Button className={classes.icon}>
                           <i className='fa-brands fa-facebook-f'></i>
                        </Button>
                        <Button className={classes.icon}>
                           <i className='fa-brands fa-youtube'></i>
                        </Button>
                        <Button className={classes.icon}>
                           <i className='fa-brands fa-instagram'></i>
                        </Button>
                     </Box>
                     <Typography variant='subtitle1' className={classes.title} my={2}>
                        Đăng ký nhận tin
                     </Typography>
                     <Box sx={{ display: 'flex' }} component='form'>
                        <OutlinedInput
                           placeholder='Nhập địa chỉ email'
                           className={classes.input}
                           size='small'
                           fullWidth
                        />
                        <Button variant='contained' className={classes.button}>
                           Gửi
                        </Button>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Container>
         ;
      </Box>
   );
};

export default forwardRef(Footer);
