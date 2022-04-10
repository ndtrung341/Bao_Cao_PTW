import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';
import React from 'react';
import Section from '../Section';
import Services from './Services';
import Slider from './Slider';
import TitleSection from '../TitleSection';
import { useSelector } from 'react-redux';
import { selectProductList } from 'features/product/productSlice';
import ProductSlider from 'components/ProductSlider';

const Home = () => {
   const productList = useSelector(selectProductList);

   return (
      <>
         <Slider />

         <Services />

         <Section>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
            <Grid container spacing={2} my={2}>
               {productList.slice(0, 4).map((item) => (
                  <Grid item key={item.id} md={6} lg={3} xs={6}>
                     <ProductCard product={item} />
                  </Grid>
               ))}
            </Grid>
         </Section>

         <Section>
            <TitleSection
               title={'Sản phẩm bán chạy'}
               subTitle={'Các sản phẩm bán chạy tại cửa hàng'}
            />
            <ProductSlider products={productList.slice(0, 8)} />
         </Section>
      </>
   );
};

export default Home;
