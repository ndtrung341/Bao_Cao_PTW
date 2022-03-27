import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
   'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/slider_item_2_image.jpg?1648172785464',
   'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/banner_1.png?1648172785464',
   'https://www.thucphambosung.vn/wp-content/uploads/2019/01/baner-rule-1400x570.jpg',
];

const Slider = () => {
   return (
      <Swiper
         modules={[Navigation, Pagination, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         {images.map((item, key) => (
            <SwiperSlide key={key}>
               <Box>
                  <img
                     src={item}
                     alt=''
                     className=''
                     style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                  />
               </Box>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Slider;
