import React, { useEffect, useState } from 'react';
import { Box, Container, Grid as MuiGrid, Rating, Typography } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from 'data/product';
import { formatCurrency } from 'utils';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from '@material-ui/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const useStyles = makeStyles((theme) => ({
   swiper1: {
      '& .swiper-wrapper': {
         height: 420,
         userSelect: 'none',
      },
   },
   thumb: {
      border: `1px solid ${theme.palette.divider}`,

      '&.swiper-slide-thumb-active': {
         border: `1px solid ${theme.palette.primary.main}`,
      },

      '& img': {
         width: '100%',
      },
   },
}));

const DetailPage = () => {
   const classes = useStyles();
   const navigate = useNavigate();
   const { slug } = useParams();
   const [product, setProduct] = useState({});
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   useEffect(() => {
      console.log(slug);
      const product = products.find((item) => item.slug === slug);
      if (!product) navigate('/404');
      console.log(product);
      setProduct(product);
   }, [slug, navigate]);

   return (
      <Container>
         <Helmet>
            <title>{product?.name}</title>
         </Helmet>

         <Breadcrumb parent={product?.category} title={product?.name} />

         <MuiGrid container>
            <MuiGrid item lg={1}>
               <Swiper
                  modules={[Thumbs]}
                  direction='vertical'
                  slidesPerView={4}
                  spaceBetween={10}
                  onSwiper={setThumbsSwiper}
                  className={classes.swiper1}
               >
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
               </Swiper>
            </MuiGrid>

            <MuiGrid item lg={4} px={2}>
               <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} spaceBetween={10}>
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
                  <SwiperSlide className={classes.thumb}>
                     <img src={product.thumb} alt='' />
                  </SwiperSlide>
               </Swiper>
            </MuiGrid>

            <MuiGrid item lg={7}>
               <Rating readOnly value={4} />
               <Typography variant='h6'>{product?.name}</Typography>
               <Box my={1}>
                  <Typography component={'span'} fontSize={28} fontWeight={600} color='error'>
                     {formatCurrency(product.salePrice)}
                  </Typography>
                  {product.discountPercent !== 0 && (
                     <Typography component={'span'} fontSize={20} ml={2}>
                        {formatCurrency(product.originalPrice)}
                     </Typography>
                  )}
                  <Typography
                     component={'p'}
                     variant='subtitle1'
                     color='text.secondary'
                     fontSize={16}
                     mt={1}
                  >
                     {product.shortDetail}
                  </Typography>
               </Box>
            </MuiGrid>
         </MuiGrid>
      </Container>
   );
};

export default DetailPage;
