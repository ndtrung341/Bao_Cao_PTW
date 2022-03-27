import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
   'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/slider_item_2_image.jpg?1648172785464',
   'https://bizweb.dktcdn.net/100/011/344/themes/836009/assets/banner_1.png?1648172785464',
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
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
   );
};

export default Slider;
