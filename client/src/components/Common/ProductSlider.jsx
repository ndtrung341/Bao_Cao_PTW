import { Box } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

const ProductSlider = ({ products = [] }) => {
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
            {products.map((item, index) => (
               <SwiperSlide key={index}>
                  <ProductCard product={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </Box>
   );
};

export default ProductSlider;
