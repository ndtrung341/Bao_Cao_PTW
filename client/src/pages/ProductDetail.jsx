import React, { useEffect, useMemo, useState } from 'react';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import Section from 'components/Common/Section';
import Breadcrumb from 'components/Common/Breadcrumb';
import ProductSlider from 'components/Common/ProductSlider';
import SkeletonProductSlider from 'components/Skeleton/SkeletonProductSlider';

import ProductInfo from 'components/Product/ProductInfo';
import AddCartForm from 'components/Product/AddCartForm';
import ProductGallery from 'components/Product/ProductGallery';

import { Helmet } from 'react-helmet-async';

import useProductDetail from 'hooks/useProductDetail';
import SkeletonInfo from 'components/Skeleton/SkeletonProductInfo';
import useAddToCart from 'hooks/useAddToCart';
import { selectCartItems } from 'redux/cartSlice';
import { useSelector } from 'react-redux';
import Reviews from 'components/Product/Reviews';

const ProductDetail = () => {
   const { product, relatedList, loading } = useProductDetail();
   const cart = useSelector(selectCartItems);
   const { handleAddToCart } = useAddToCart();
   const [showMore, setShowMore] = useState(false);

   const qtyInCart = useMemo(
      () => cart.find((item) => item.productId === product.id)?.quantity || 0,
      [cart, product.id]
   );

   const handleAddItemToCart = (quantity) => {
      const newItem = {
         productId: product.id,
         quantity,
      };
      handleAddToCart(newItem);
   };

   const handleShowMoreClick = (e) => {
      if (e.target.closest('.trigger')) {
         setShowMore(!showMore);
      }
   };

   const description = useMemo(() => {
      return product.description
         ? (showMore ? product.description : product.description?.substring(0, 280)) +
              `<span class='trigger' style='color:blue'>
            ${showMore ? 'Ẩn' : '...Hiện'}
         </span>`
         : '';
   }, [product, showMore]);

   return (
      <>
         <Helmet>
            <title>{product?.name}</title>
         </Helmet>

         {/* BREADCRUMB */}
         {loading ? null : <Breadcrumb parent={product.brand.name} title={product.name} />}

         <Container>
            <Paper sx={{ mb: 3, px: 2, py: 3 }} elevation={0}>
               <Grid container spacing={1}>
                  {/* PRODUCT GALLERY */}
                  <Grid container item lg={5} md={12}>
                     <ProductGallery thumbs={product.productImages} loading={loading} />
                  </Grid>

                  <Grid item lg={7} md={12}>
                     {loading ? (
                        <SkeletonInfo />
                     ) : (
                        <>
                           {/* PRODUCT INFO */}
                           <ProductInfo product={product} />
                           {/* ADD TO CART FORM */}
                           <AddCartForm
                              onSubmit={handleAddItemToCart}
                              maxQty={product.quantity - qtyInCart}
                           />
                        </>
                     )}
                  </Grid>
               </Grid>
            </Paper>

            <Paper sx={{ p: 2, my: 3 }} elevation={0}>
               <Typography variant={'h6'} sx={{ display: 'flex', mx: 2 }}>
                  Mô tả
               </Typography>
               <Box sx={{ p: 2 }}>
                  <Typography
                     component={'p'}
                     variant='subtitle1'
                     color='text.secondary'
                     fontSize={16}
                     onClick={handleShowMoreClick}
                     dangerouslySetInnerHTML={{
                        __html: description,
                     }}
                  ></Typography>
               </Box>
            </Paper>

            {loading ? null : <Reviews product={product} />}
         </Container>

         {/* SLIDER SIMILAR PRODUCT */}
         <Section title={'Sản phẩm tương tự'} subtitle={'Các sản phẩm tương tự'}>
            {loading ? <SkeletonProductSlider /> : <ProductSlider products={relatedList} />}
         </Section>
      </>
   );
};

export default ProductDetail;
