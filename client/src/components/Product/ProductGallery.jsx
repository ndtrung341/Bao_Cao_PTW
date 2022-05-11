import React, { useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const useStyles = makeStyles((theme) => ({
   swiper1: {
      '& .swiper-wrapper': {
         height: 370,
         userSelect: 'none',
         [theme.breakpoints.down('sm')]: {
            height: 'auto',
         },
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

const ProductGallery = ({ thumbs, loading }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const classes = useStyles();

   return (
      <>
         <Grid item lg={2} xs={12} order={{ xs: 2, lg: 1 }}>
            <Swiper
               modules={[Thumbs]}
               // direction='vertical'
               slidesPerView={4}
               spaceBetween={15}
               onSwiper={setThumbsSwiper}
               className={classes.swiper1}
               updateOnWindowResize
               breakpoints={{
                  767: {
                     direction: 'horizontal',
                  },
                  920: {
                     direction: 'vertical',
                  },
               }}
            >
               {loading
                  ? Array(4)
                       .fill()
                       .map((_, index) => (
                          <SwiperSlide className={classes.thumb} key={index}>
                             <Skeleton variant='rectangular' width='100%' height='100%' />
                          </SwiperSlide>
                       ))
                  : thumbs.map((thumb, index) => (
                       <SwiperSlide className={classes.thumb} key={index}>
                          <img src={thumb.url} alt='' />
                       </SwiperSlide>
                    ))}
            </Swiper>
         </Grid>

         <Grid
            item
            lg={10}
            xs={12}
            order={{ xs: 1, lg: 2 }}
            sx={{ px: { lg: 2, sx: 0 }, my: { xs: 2, lg: 0 } }}
         >
            <Swiper
               modules={[Thumbs]}
               thumbs={{ swiper: thumbsSwiper }}
               spaceBetween={10}
            >
               {loading ? (
                  <Skeleton variant='rectangular' width='100%' height={400} />
               ) : (
                  thumbs.map((thumb, index) => (
                     <SwiperSlide className={classes.thumb} key={index}>
                        <img src={thumb.url} alt='' />
                     </SwiperSlide>
                  ))
               )}
            </Swiper>
         </Grid>
      </>
   );
};

export default ProductGallery;
