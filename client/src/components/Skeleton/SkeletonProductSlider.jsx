import { Box } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SkeletonProductCard from './SkeletonProductCard';

const SkeletonProductSlider = () => {
   return (
      <Box my={2}>
         <Swiper
            updateOnWindowResize
            breakpoints={{
               320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  scrollbar: true,
               },
               780: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            }}
         >
            {Array(4)
               .fill()
               .map((_, index) => (
                  <SwiperSlide key={index}>
                     <SkeletonProductCard />
                  </SwiperSlide>
               ))}
         </Swiper>
      </Box>
   );
};

export default SkeletonProductSlider;
