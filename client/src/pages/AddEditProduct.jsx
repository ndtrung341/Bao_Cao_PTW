import { Container, Typography } from '@mui/material';
import axiosClient from 'api/axiosClient';
import categoryApi from 'api/categoryApi';
import AddEditForm from 'components/Admin/AddEditForm';
import React, { useEffect, useState } from 'react';

const AddEditProduct = () => {
   const [categories, setCategories] = useState([]);
   const [brands, setBrands] = useState([]);

   useEffect(() => {
      (async () => {
         const { data } = await categoryApi.getAll();
         setCategories(data);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const { data } = await axiosClient.get('brands');
         setBrands(data);
      })();
   }, []);

   return (
      <Container>
         <Typography py={2} variant={'h5'}>
            Thêm sản phẩm
         </Typography>
         <AddEditForm categories={categories} brands={brands} />
      </Container>
   );
};

export default AddEditProduct;
