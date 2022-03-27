import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const images = [
//    'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/slider_item_2_image.jpg?1648172785464',
//    'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/banner_1.png?1648172785464',
//    'https://www.thucphambosung.vn/wp-content/uploads/2019/01/baner-rule-1400x570.jpg',
//    'https://www.wheystore.vn/upload/product_optimize/image_content/349_image_content_mass_infusion_12lbs___xtend_bcaas_90_servings_image_content_1587723009.jpg',
// ];

const images = [
   'https://bizweb.dktcdn.net/100/011/344/files/1-5.jpg?v=1608113447817',
   'https://via.placeholder.com/1200x400/000',
   'https://via.placeholder.com/1200x400/f55',
   'https://via.placeholder.com/1200x400/cdd',
   // 'https://www.wheystore.vn/upload/banner/upl_banner_1641957646_image_1641957646.jpg',
];

const useStyles = makeStyles((theme) => ({
   root: {},
   slide: {
      height: 600,
      '& img': {
         width: '100%',
         // height: '100%',
         objectFit: 'cover',
         objectPosition: 'center',
      },
   },
}));

const Slider = () => {
   const classes = useStyles();

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
