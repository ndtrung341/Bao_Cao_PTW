import { Container } from '@mui/material';
import React from 'react';
import { Swiper } from 'swiper/react';

const ServiceItem = () => {};

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
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
         </Swiper>
      </Container>
   );
};

export default Services;
