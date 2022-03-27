import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: '-20px',
   },
   wrapper: {
      backgroundColor: '#3f3fdb',
      padding: theme.spacing(2),
   },
}));

const ServiceItem = ({ title, content, icon }) => {
   return (
      <>
         <Box sx={{ d: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={icon} alt='' />
         </Box>
         <Box>
            <Typography variant='h6' color='white'>
               {title}
            </Typography>

            <Typography varitant='caption'>{content}</Typography>
         </Box>
      </>
   );
};

const Services = () => {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <Container>
            <Box className={classes.wrapper}>
               <Swiper
                  slidesPerView={4}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
               >
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        content='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        content='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        content='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        content='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
               </Swiper>
            </Box>
         </Container>
      </Box>
   );
};

export default Services;
