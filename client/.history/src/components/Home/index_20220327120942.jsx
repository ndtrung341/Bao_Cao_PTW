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
      name: 'ON Whey Gold Standard 100% Whey Protein, 5 Lbs',
      originalPrice: 1800000,
      discountPercent: 10,
      salePrice: 1640000,
      thumb: 'https://bizweb.dktcdn.net/thumb/medium/100/011/344/products/on-whey-gold-standard-whey-protein-5lbs-double-rich-chocolate-gymstore.jpg?v=1640748044000',
   },
   {
      id: 2,
      name: 'ON Whey Gold Standard 100% Whey Protein, 5 Lbs',
      originalPrice: 1800000,
      discountPercent: 0,
      salePrice: 1800000,
      thumb: 'https://bizweb.dktcdn.net/thumb/medium/100/011/344/products/on-whey-gold-standard-whey-protein-5lbs-double-rich-chocolate-gymstore.jpg?v=1640748044000',
   },
   {
      id: 3,
      name: 'ON Whey Gold Standard 100% Whey Protein, 5 Lbs',
      originalPrice: 1800000,
      discountPercent: 0,
      salePrice: 1800000,
      thumb: 'https://bizweb.dktcdn.net/thumb/medium/100/011/344/products/on-whey-gold-standard-whey-protein-5lbs-double-rich-chocolate-gymstore.jpg?v=1640748044000',
   },
   {
      id: 4,
      name: 'ON Whey Gold Standard 100% Whey Protein, 5 Lbs',
      originalPrice: 1800000,
      discountPercent: 10,
      salePrice: 1640000,
      thumb: 'https://bizweb.dktcdn.net/thumb/medium/100/011/344/products/on-whey-gold-standard-whey-protein-5lbs-double-rich-chocolate-gymstore.jpg?v=1640748044000',
   },
];

const Home = () => {
   return (
      <>
         <Slider />
         <Services />
         <Section>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
            <Grid container spacing={2}>
               {products.map((item) => (
                  <Grid item key={item.id} md={6} lg={3}>
                     <ProductCard product={item} />
                  </Grid>
               ))}
            </Grid>
         </Section>
         <Section>
            <TitleSection title={'Sản phẩm bán chạy'} subTitle={'Các sản phẩm bán chạy tại cửa hàng'} />
            <Grid container>
               <Grid item md={2} lg={3}>
                  {/* <ProductCard /> */}
               </Grid>
            </Grid>
         </Section>
      </>
   );
};

export default Home;
