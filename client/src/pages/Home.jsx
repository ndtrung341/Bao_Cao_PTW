import { Grid, Skeleton } from '@mui/material';

import Services from 'components/Home/Services';
import BannerSlider from 'components/Home/BannerSlider';

import ProductCard from 'components/Common/ProductCard';
import ProductSlider from 'components/Common/ProductSlider';
import Section from 'components/Common/Section';

import React, { useEffect, useState } from 'react';
import SkeletonProductSlider from 'components/Skeleton/SkeletonProductSlider';
import SkeletonProductList from 'components/Skeleton/SkeletonProductList';
import { productApi } from 'api/productApi';
const slide1 =
   'https://www.lego.com/cdn/cs/set/assets/blt74e9f9c0ce69e546/MT4-TEASER-Landing-75341-202204-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=2200&height=800&dpr=1';

const slide2 =
   'https://www.lego.com/cdn/cs/set/assets/bltb139edf6845b9823/21332-Hero-Standard-Large-8.jpg?fit=crop&format=webply&quality=80&width=2200&height=800&dpr=1';

const slide3 =
   'https://www.lego.com/cdn/cs/set/assets/blt4f0ebbc8df332877/03b-10297-Palm-Homepage-202203b-Hero-Standard-Large-CrossSell.jpg?fit=crop&format=webply&quality=80&width=2200&height=800&dpr=1';

const bannerList = [slide1, slide2, slide3];

const Home = () => {
   const [latestList, setLatestList] = useState([]);
   const [topList, setTopList] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         setLoading(true);

         const responseList = await Promise.all([
            productApi.getLatest(),
            productApi.getBestSeller(),
         ]);

         const [latestList, topList] = responseList.map(({ data }) => data);

         setLoading(false);
         setLatestList(latestList);
         setTopList(topList);
      })();
   }, []);

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
                  latestList.map((item) => (
                     <Grid item key={item.id} md={6} lg={3} xs={6}>
                        <ProductCard product={item} />
                     </Grid>
                  ))
               )}
            </Grid>
         </Section>

         <Section title={'Sản phẩm bán chạy'} subtitle={'Các sản phẩm bán chạy tại cửa hàng'}>
            {loading ? <SkeletonProductSlider /> : <ProductSlider products={topList} />}
         </Section>
      </>
   );
};

export default Home;
