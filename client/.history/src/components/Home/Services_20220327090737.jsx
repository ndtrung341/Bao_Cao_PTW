import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.primary.main,
      marginTop: -2,
   },
}));

const ServiceItem = (content, icon) => {
   return (
      <>
         <Box>
            <img src={icon} alt='' />
         </Box>
         <Box>
            <Typography>{content}</Typography>
         </Box>
      </>
   );
};

const Services = () => {
   return (
      <Container>
         <Swiper
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
            <SwiperSlide>
               <ServiceItem />
            </SwiperSlide>
         </Swiper>
      </Container>
   );
};

export default Services;
