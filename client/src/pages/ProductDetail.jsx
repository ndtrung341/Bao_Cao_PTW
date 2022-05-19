import React, { useMemo } from 'react';

import { Container, Grid, Paper } from '@mui/material';

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

const ProductDetail = () => {
   const { product, relatedList, loading } = useProductDetail();
   const cart = useSelector(selectCartItems);
   const { handleAddToCart } = useAddToCart();

   console.log('render');

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
         </Container>

         {/* SLIDER SIMILAR PRODUCT */}
         <Section title={'Sản phẩm tương tự'} subtitle={'Các sản phẩm tương tự'}>
            {loading ? <SkeletonProductSlider /> : <ProductSlider products={relatedList} />}
         </Section>
      </>
   );
};

export default ProductDetail;
