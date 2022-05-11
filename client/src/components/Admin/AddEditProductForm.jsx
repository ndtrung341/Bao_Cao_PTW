import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Paper } from '@mui/material';
import InputField from 'components/FormFields/InputField';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AutocompleteField from 'components/FormFields/AutocompleteField';
import EditorField from 'components/FormFields/EditorField';
import ImageUpload from './ImageUpload';
import NumberField from 'components/FormFields/NumberField';
import axiosClient from 'api/axiosClient';
import { productApi } from 'api/productApi';
import Alert from '@mui/material/Alert';

const schema = yup.object().shape({
   name: yup.string().required('Vui lòng nhập tên sản phẩm'),
   brand: yup.mixed().test('required', 'Vui lòng chọn thương hiệu', (value) => value),
   categories: yup.array().min(1, 'Chọn ít nhất một danh mục'),
   price: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required('Vui lòng nhập giá bán'),
   salePrice: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required('Vui lòng nhập giá giảm')
      .lessThan(yup.ref('price'), 'Giá giảm phải nhỏ hơn giá gốc')
      .default(0),
   quantity: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required('Vui lòng nhập số lượng'),
   description: yup.string().required('Vui lòng nhập mô tả'),
   images: yup.array().min(1, 'Chọn ít nhất một hình'),
});

const AddEditProductForm = ({ product, categories, brands, onSubmit }) => {
   const defaultValues = useMemo(
      () => ({
         name: product?.name || '',
         price: product?.price || '',
         brand: brands.find((item) => item.value === product?.brand.id) || '',
         categories: categories.filter((item) =>
            product?.categories.some((cat) => cat.id === item.value)
         ),
         salePrice: product?.salePrice || '',
         description: product?.description || '',
         images: product?.productImages || [],
         quantity: product?.quantity || '',
      }),
      [product, brands, categories]
   );

   const { control, handleSubmit, getValues, setValue, setError, clearErrors } = useForm({
      defaultValues: defaultValues,
      resolver: yupResolver(schema),
      criteriaMode: 'all',
   });

   console.log(getValues());

   const handleFormSubmit = (values) => {
      const newValues = { ...values };
      newValues.brand = newValues.brand.value;
      newValues.categories = newValues.categories.map((item) => item.value);
      onSubmit?.(newValues);
   };

   const handleRemoveImage = async (image) => {
      console.log(getValues('images'));
      const newValues = getValues('images').filter((img) => img.public_id !== image.public_id);
      setValue('images', newValues);

      if (product) {
         await productApi.deleteMedia({
            productId: product.id,
            publicId: image.public_id,
         });
      } else {
         await axiosClient.post('http://localhost:8000/api/upload/destroy', {
            publicId: image.public_id,
         });
      }
   };

   return (
      <Grid container spacing={2}>
         <Grid item xs={7}>
            <Paper sx={{ p: 2 }}>
               <Box component={'form'} autoComplete='off' onSubmit={handleSubmit(handleFormSubmit)}>
                  <Controller
                     control={control}
                     name='name'
                     render={({ field, fieldState }) => (
                        <InputField field={field} fieldState={fieldState} label='Tên sản phẩm' />
                     )}
                  />

                  <Controller
                     control={control}
                     name='brand'
                     render={({ field, fieldState }) => (
                        <AutocompleteField
                           field={field}
                           fieldState={fieldState}
                           label={'Thương hiệu'}
                           options={brands}
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
                           label={'Danh mục'}
                           options={categories}
                        />
                     )}
                  />

                  <Grid container spacing={3}>
                     <Grid item xs={6}>
                        <Controller
                           control={control}
                           name='price'
                           render={({ field, fieldState }) => (
                              <NumberField
                                 field={field}
                                 fieldState={fieldState}
                                 label='Giá'
                                 thousandSeparator='.'
                              />
                           )}
                        />
                     </Grid>

                     <Grid item xs={6}>
                        <Controller
                           control={control}
                           name='salePrice'
                           render={({ field, fieldState }) => (
                              <NumberField
                                 field={field}
                                 fieldState={fieldState}
                                 label='Giá giảm'
                                 thousandSeparator='.'
                              />
                           )}
                        />
                     </Grid>
                  </Grid>

                  <Controller
                     control={control}
                     name='quantity'
                     render={({ field, fieldState }) => (
                        <NumberField field={field} fieldState={fieldState} label='Số lượng' />
                     )}
                  />

                  <Controller
                     control={control}
                     name='description'
                     render={({ field, fieldState }) => (
                        <EditorField field={field} fieldState={fieldState} label='Mô tả' />
                     )}
                  />

                  <Button type='submit' variant='contained' sx={{ mt: 1 }}>
                     {product ? 'Lưu' : 'Thêm'}
                  </Button>
               </Box>
            </Paper>
         </Grid>

         <Grid item xs={5}>
            <Paper sx={{ p: 2 }}>
               <Controller
                  control={control}
                  name='images'
                  render={({ field: { value, onChange }, fieldState }) => {
                     return (
                        <FormControl fullWidth error={fieldState.invalid}>
                           <FormLabel sx={{ mb: 1 }}>Ảnh</FormLabel>

                           {fieldState.invalid && (
                              <Alert severity='error' sx={{ mb: 1 }} icon={false}>
                                 {Object.values(fieldState.error?.types).map((message, index) => (
                                    <FormHelperText key={index}>{message}</FormHelperText>
                                 ))}
                              </Alert>
                           )}

                           <ImageUpload
                              action={'http://localhost:8000/api/upload'}
                              fileList={value}
                              previewImages={value.map((item) => item.url)}
                              onUpload={(values) => {
                                 clearErrors('images');
                                 onChange(values);
                              }}
                              onRemove={handleRemoveImage}
                              onError={(errors) =>
                                 setError('images', {
                                    types: errors.reduce(
                                       (acc, val) => ({ ...acc, [val]: val }),
                                       {}
                                    ),
                                 })
                              }
                           />
                        </FormControl>
                     );
                  }}
               />
            </Paper>
         </Grid>
      </Grid>
   );
};

export default AddEditProductForm;
