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
import { Email, LocalPhone, LocationOnOutlined } from '@mui/icons-material';
import { getPathPublic } from 'utils';
// https://www.lego.com/cdn/cs/set/assets/blt001fa66733a27e4a/42115-PDP-202003-Hero4-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=2200&height=700&dpr=1
// ${getPathPublic('footer.png')}
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(3, 0),
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://www.lego.com/cdn/cs/set/assets/blt001fa66733a27e4a/42115-PDP-202003-Hero4-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=2200&height=700&dpr=1")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
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
                     <img src={getPathPublic('logo-dark.png')} alt='' width={250}></img>
                  </Box>
                  <List>
                     <ListItem>
                        <LocationOnOutlined sx={{ mr: 2 }} />
                        <ListItemText>
                           73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long
                        </ListItemText>
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
                     {/* <Typography variant='subtitle1' className={classes.title}>
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
                     </Box> */}
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

                     <Box height={200} mt={3}>
                        <iframe
                           title='map'
                           src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1440907586257!2d105.95961575068047!3d10.24996067145613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a82ce95555555%3A0x451cc8d95d6039f8!2zVHLGsOG7nW5nIMSQSCBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBWxKluaCBMb25n!5e0!3m2!1svi!2s!4v1649554886222!5m2!1svi!2s'
                           width={'100%'}
                           style={{ border: 0 }}
                           height={200}
                           allowFullScreen
                           loading='lazy'
                        ></iframe>
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
