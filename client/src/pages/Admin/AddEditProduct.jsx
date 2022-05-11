import { Box, Button, Typography } from '@mui/material';
import axiosClient from 'api/axiosClient';
import { productApi } from 'api/productApi';
import AddEditForm from 'components/Admin/AddEditProductForm';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import useModal from 'hooks/useModal';
import { toast } from 'react-toastify';

const AddEditProduct = () => {
   const [categories, setCategories] = useState([]);
   const [brands, setBrands] = useState([]);
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(false);
   const { modal } = useModal();
   const { id } = useParams();
   const navigate = useNavigate();

   const fetchProduct = useCallback(
      async (id) => {
         try {
            const product = await productApi.get(id);
            setProduct(product);
         } catch (error) {
            return navigate('/404');
         }
      },
      [navigate]
   );

   useEffect(() => {
      (async () => {
         setLoading(true);
         // fetch brands and categories
         const categoriesPromise = axiosClient.get('categories');
         const brandsPromise = axiosClient.get('brands');
         // same Promise.all
         const categories = await categoriesPromise;
         const brands = await brandsPromise;

         setBrands(brands.data);
         setCategories(categories.data);
         // fetch product if id exits
         id && (await fetchProduct(id));

         setLoading(false);
      })();
   }, [id, fetchProduct]);

   // map categories to set autocomplete
   const mapCategories = useMemo(
      () => categories.map((item) => ({ value: item.id, label: item.name })),
      [categories]
   );

   // map brands to set autocomplete
   const mapBrands = useMemo(
      () => brands.map((item) => ({ value: item.id, label: item.name })),
      [brands]
   );

   const handleAddEditProduct = async (values) => {
      try {
         if (product) {
            await productApi.update(values, product.id);
            navigate('/admin/products', { replace: true });
            toast.success('Cập nhật thành công');
         } else {
            await productApi.create(values);
            navigate('/admin/products', { replace: true });
            toast.success('Thêm thành công');
         }
      } catch (error) {
         modal({ type: 'error', title: 'Error', content: error });
      }
   };

   return (
      <>
         {loading ? (
            <Backdrop
               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
               open={loading}
            >
               <CircularProgress color='inherit' size={50} />
            </Backdrop>
         ) : (
            <>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography py={2} variant={'h5'}>
                     {product ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                  </Typography>

                  <Link to='/admin/products'>
                     <Button>Xem danh sách</Button>
                  </Link>
               </Box>

               <AddEditForm
                  categories={mapCategories}
                  brands={mapBrands}
                  onSubmit={handleAddEditProduct}
                  product={product}
               />
            </>
         )}
      </>
   );
};

export default AddEditProduct;
