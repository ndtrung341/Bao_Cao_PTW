import { Box, Container, Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';
import React from 'react';
import Section from './Section';
import Services from './Services';
import Slider from './Slider';
import TitleSection from './TitleSection';

const products = [
   {
      id: 1,
      name: 'ON WHEY GOLD STANDARD 100% WHEY PROTEIN, 5 LBS',
   },
];

const Home = () => {
   return (
      <>
         <Slider />
         <Services />
         <Section>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
            <Grid container>
               <Grid item md={2} lg={3}>
                  <ProductCard />
               </Grid>
            </Grid>
         </Section>
         <Section>
            <TitleSection title={'Sản phẩm bán chạy'} subTitle={'Các sản phẩm bán chạy tại cửa hàng'} />
            <Grid container>
               <Grid item md={2} lg={3}>
                  <ProductCard />
               </Grid>
            </Grid>
         </Section>
      </>
   );
};

export default Home;
