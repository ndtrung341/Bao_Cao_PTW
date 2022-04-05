import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from 'assets/img/slide1.png';
import img2 from 'assets/img/slide2.png';

const SLIDES_THUMB = [img2, img1];

const useStyles = makeStyles((theme) => ({
   root: {},
   slide: {
      '& img': {
         width: '100%',
         maxHeight: '100%',
         objectFit: 'contain',
      },
   },
}));

const Slider = () => {
   const classes = useStyles();
   const images = SLIDES_THUMB;

   return (
      <Swiper
         modules={[Navigation, Pagination, A11y]}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         {images.map((item, key) => (
            <SwiperSlide key={key}>
               <Box className={classes.slide}>
                  <img src={item} alt='' />
               </Box>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Slider;
