import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

const BannerSlider = ({ bannerList }) => {
   const classes = useStyles();
   return (
      <Swiper
         modules={[Navigation, Pagination, A11y]}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
      >
         {bannerList.map((item, key) => (
            <SwiperSlide key={key}>
               <Box className={classes.slide}>
                  <img src={item} alt='' />
               </Box>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default BannerSlider;
