import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import TitleSection from 'components/TitleSection';
import ProductSlider from 'components/ProductSlider';
import AddCartForm from '../components/AddCartForm';
import DetailTabs from '../components/DetailTabs';
import useProductDetail from 'hooks/useProductDetail';

const DetailPage = () => {
   const location = useLocation();
   const { product, relatedList, loading } = useProductDetail(location.state?.id);

   console.log({ product, relatedList, loading });
   return (
      <>
         <Helmet>
            <title>{product?.name}</title>
         </Helmet>

         {/* BREADCRUMB */}
         {loading ? null : (
            <Breadcrumb parent={product.category.name} title={product.name} />
         )}

         <Container>
            <Paper sx={{ mb: 3, px: 2, py: 3 }} elevation={0}>
               <Grid container spacing={1}>
                  {/* PRODUCT GALLERY */}
                  <Grid container item lg={5}>
                     {loading ? null : <ProductGallery thumbs={[product.thumb]} />}
                  </Grid>

                  <Grid item lg={7}>
                     {loading ? null : (
                        <>
                           {/* PRODUCT INFO */}
                           <ProductInfo product={product} />
                           {/* ADD TO CART FORM */}
                           <AddCartForm />
                        </>
                     )}
                  </Grid>
               </Grid>
            </Paper>

            {/* TABS */}
            <DetailTabs />

            {/* SLIDER SIMILAR PRODUCT */}
            <Box my={5}>
               <TitleSection
                  title={'Sản phẩm tương tự'}
                  subTitle={'Các sản phẩm tương tự'}
               />
               <ProductSlider products={relatedList} />
            </Box>
         </Container>
      </>
   );
};

export default DetailPage;
