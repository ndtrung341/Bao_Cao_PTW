import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { getFullPathImage } from 'utils';

const useStyles = makeStyles((theme) => ({
   swiper1: {
      '& .swiper-wrapper': {
         height: 370,
         userSelect: 'none',
      },
   },
   thumb: {
      border: `1px solid ${theme.palette.divider}`,
      boxSizing: 'border-box',
      '&.swiper-slide-thumb-active': {
         border: `1px solid ${theme.palette.primary.main}`,
      },

      '& img': {
         width: '100%',
      },
   },
}));

const ProductGallery = ({ thumbs }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const classes = useStyles();

   return (
      <>
         <Grid item lg={2}>
            <Swiper
               modules={[Thumbs]}
               direction='vertical'
               slidesPerView={4}
               spaceBetween={15}
               onSwiper={setThumbsSwiper}
               className={classes.swiper1}
            >
               {thumbs.map((thumb, index) => (
                  <SwiperSlide className={classes.thumb} key={index}>
                     <img src={getFullPathImage(thumb)} alt='' />
                  </SwiperSlide>
               ))}
            </Swiper>
         </Grid>

         <Grid item lg={10} px={2}>
            <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} spaceBetween={10}>
               {thumbs.map((thumb, index) => (
                  <SwiperSlide className={classes.thumb} key={index}>
                     <img src={getFullPathImage(thumb)} alt='' />
                  </SwiperSlide>
               ))}
            </Swiper>
         </Grid>
      </>
   );
};

export default ProductGallery;
