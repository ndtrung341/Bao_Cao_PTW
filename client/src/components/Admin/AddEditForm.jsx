import { Box, Button, Grid, Paper } from '@mui/material';
import InputField from 'components/FormFields/InputField';
import React, { useCallback, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AutocompleteField from 'components/FormFields/AutocompleteField';
import EditorField from 'components/FormFields/EditorField';
import ImageUpload from './ImageUpload';
import axiosClient from 'api/axiosClient';

const defaultValues = {
   name: '',
   brand: '',
   categories: [],
   price: '',
   salePrice: '',
   description: '',
   images: [],
};

const AddEditForm = ({ categories, brands }) => {
   const { control, handleSubmit, getValues } = useForm({ defaultValues });
   // const [images, setImages] = useState([]);

   const mapImageURLs = useMemo(
      () => getValues('images').map((item) => item.url),
      [getValues]
   );
   console.log(getValues('images'));

   const mapCategories = useMemo(
      () => categories.map((item) => ({ id: item.id, label: item.name })),
      [categories]
   );

   const mapBrands = useMemo(
      () => brands.map((item) => ({ id: item.id, label: item.name })),
      [brands]
   );

   const handleAddProduct = (value) => {
      console.log(value);
   };

   // const handleUploadSuccess = (values) => {
   //    setImages([...images, ...values]);
   // };

   return (
      <Grid container spacing={2}>
         <Grid item xs={7}>
            <Paper sx={{ p: 2 }}>
               <Box
                  component={'form'}
                  autoComplete='off'
                  onSubmit={handleSubmit(handleAddProduct)}
               >
                  <Controller
                     control={control}
                     name='name'
                     render={({ field, fieldState }) => (
                        <InputField
                           field={field}
                           fieldState={fieldState}
                           label='Product name'
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name='brand'
                     render={({ field, fieldState }) => (
                        <AutocompleteField
                           field={field}
                           fieldState={fieldState}
                           label={'Brand'}
                           options={mapBrands}
                           onChange={(e, value) => field.onChange(value)}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name='categories'
                     render={({ field, fieldState }) => (
                        <AutocompleteField
                           multiple={true}
                           field={field}
                           fieldState={fieldState}
                           label={'Categories'}
                           options={mapCategories}
                           onChange={(e, value) => field.onChange(value)}
                        />
                     )}
                  />

                  <Grid container spacing={3}>
                     <Grid item xs={6}>
                        <Controller
                           control={control}
                           name='price'
                           render={({ field, fieldState }) => (
                              <InputField
                                 field={field}
                                 fieldState={fieldState}
                                 label='Price'
                                 type='number'
                              />
                           )}
                        />
                     </Grid>

                     <Grid item xs={6}>
                        <Controller
                           control={control}
                           name='salePrice'
                           render={({ field, fieldState }) => (
                              <InputField
                                 field={field}
                                 fieldState={fieldState}
                                 label='Sale price'
                                 type='number'
                              />
                           )}
                        />
                     </Grid>
                  </Grid>

                  <Controller
                     control={control}
                     name='description'
                     render={({ field, fieldState }) => (
                        <EditorField
                           field={field}
                           fieldState={fieldState}
                           label='Description'
                        />
                     )}
                  />

                  <Button type='submit' variant='contained' sx={{ mt: 1 }}>
                     Tạo
                  </Button>
               </Box>
            </Paper>
         </Grid>
         <Grid item xs={5}>
            <Paper sx={{ p: 2 }}>
               <Controller
                  control={control}
                  name='images'
                  render={({ field, fieldState }) => (
                     <ImageUpload
                        action={'http://localhost:8000/api/upload'}
                        onSuccess={(newValues) => {
                           console.log({ newValues, value: field.value });
                           field.onChange(newValues);
                        }}
                        previewImages={mapImageURLs}
                        fileList={field.value}
                     />
                  )}
               />
            </Paper>
         </Grid>
      </Grid>
   );
};

export default AddEditForm;
