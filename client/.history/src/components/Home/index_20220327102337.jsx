import { Box } from '@mui/material';
import React from 'react';
import { Grid } from 'swiper';
import NewProducts from './NewProducts';
import Services from './Services';
import Slider from './Slider';
import TitleSection from './TitleSection';

const Home = () => {
   return (
      <>
         <Slider />
         <Services />
         <Box component={'section'}>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
            <Grid
         </Box>
      </>
   );
};

export default Home;
