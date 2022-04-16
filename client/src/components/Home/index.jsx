import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';
import React from 'react';
import Section from '../Section';
import Services from './Services';
import Slider from './Slider';
import TitleSection from '../TitleSection';
import ProductSlider from 'components/ProductSlider';
import useHome from 'hooks/useHome';

const Home = () => {
   const { latestList, topList, bannerList, loading } = useHome();

   return (
      <>
         {loading ? null : <Slider bannerList={bannerList} />}

         <Services />

         <Section>
            <TitleSection
               title={'Sản phẩm mới'}
               subTitle={'Các sản phẩm mới có tại cửa hàng'}
            />
            <Grid container spacing={2} my={2}>
               {loading
                  ? null
                  : topList.map((item) => (
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
            {loading ? null : <ProductSlider products={latestList} />}
         </Section>
      </>
   );
};

export default Home;
