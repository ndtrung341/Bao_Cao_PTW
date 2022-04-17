import { Grid, Skeleton } from '@mui/material';

import Services from 'components/Home/Services';
import BannerSlider from 'components/Home/BannerSlider';

import ProductCard from 'components/Common/ProductCard';
import ProductSlider from 'components/Common/ProductSlider';
import Section from 'components/Common/Section';

import useHome from 'hooks/useHome';
import React from 'react';
import SkeletonProductSlider from 'components/Common/SkeletonProductSlider';
import SkeletonProductList from 'components/Collection/SkeletonProductList';

const Home = () => {
   const { latestList, topList, bannerList, loading } = useHome();

   return (
      <>
         {loading ? (
            <Skeleton height={400} variant='rectangular' />
         ) : (
            <BannerSlider bannerList={bannerList} />
         )}
         <Services />

         <Section title={'Sản phẩm mới'} subtitle={'Các sản phẩm mới có tại cửa hàng'}>
            <Grid container spacing={2} my={2}>
               {loading ? (
                  <SkeletonProductList length={4} />
               ) : (
                  topList.map((item) => (
                     <Grid item key={item.id} md={6} lg={3} xs={6}>
                        <ProductCard product={item} />
                     </Grid>
                  ))
               )}
            </Grid>
         </Section>

         <Section
            title={'Sản phẩm bán chạy'}
            subtitle={'Các sản phẩm bán chạy tại cửa hàng'}
         >
            {loading ? (
               <SkeletonProductSlider />
            ) : (
               <ProductSlider products={latestList} />
            )}
         </Section>
      </>
   );
};

export default Home;
