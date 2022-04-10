import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from 'data/product';

import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import TitleSection from 'components/TitleSection';
import ProductSlider from 'components/ProductSlider';
import AddCartForm from '../components/AddCartForm';
import DetailTabs from '../components/DetailTabs';

// const useStyles = makeStyles((theme) => ({

// }));

const DetailPage = () => {
   // const classes = useStyles();
   const navigate = useNavigate();
   const { slug } = useParams();
   const [product, setProduct] = useState({});

   useEffect(() => {
      console.log(slug);
      const product = products.find((item) => item.slug === slug);
      if (!product) navigate('/404');
      console.log(product);
      setProduct(product);
   }, [slug, navigate]);

   return (
      <>
         <Helmet>
            <title>{product?.name}</title>
         </Helmet>

         {/* BREADCRUMB */}
         <Breadcrumb parent={product?.category} title={product?.name} />

         <Container>
            <Paper sx={{ mb: 3, px: 2, py: 3 }} elevation={0}>
               <Grid container spacing={1}>
                  {/* PRODUCT GALLERY */}
                  <Grid container item lg={5}>
                     <ProductGallery thumbs={[product.thumb, product.thumb]} />
                  </Grid>

                  <Grid item lg={7}>
                     {/* PRODUCT INFO */}
                     <ProductInfo product={product} />
                     {/* ADD TO CART FORM */}
                     <AddCartForm />
                  </Grid>
               </Grid>
            </Paper>

            {/* TABS */}
            <DetailTabs />

            {/* SLIDER RELATED PRODUCT */}
            <Box my={5}>
               <TitleSection title={'Sản phẩm tương tự'} subTitle={'Các sản phẩm tương tự'} />
               <ProductSlider products={products.slice(0, 8)} />
            </Box>
         </Container>
      </>
   );
};

export default DetailPage;
