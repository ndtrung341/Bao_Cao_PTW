import { Backdrop, makeStyles } from '@material-ui/core';
import {
   Box,
   Button,
   CircularProgress,
   Pagination,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import axiosClient from 'api/axiosClient';
import React, { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/FormFields/InputField';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useModal from 'hooks/useModal';

const useStyles = makeStyles((theme) => ({
   title: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(3),
   },
}));

const schema = yup.object().shape({
   name: yup.string().required('Tên danh mục không được để trống'),
});

const CategoryManagement = () => {
   const classes = useStyles();
   const { modal } = useModal();
   const [loading, setLoading] = useState(false);
   const [selectCategory, setSelectCategory] = useState(null);
   const [categories, setCategories] = useState([]);
   const [pagination, setPagination] = useState({});
   const [filters, setFilters] = useState({
      page: 1,
   });

   const isEdit = useMemo(() => Boolean(selectCategory), [selectCategory]);

   const { control, handleSubmit, reset, setValue } = useForm({
      defaultValues: {
         name: '',
      },
      resolver: yupResolver(schema),
   });

   useEffect(() => {
      (async () => {
         setLoading(true);
         const { data } = await axiosClient.get('categories/getAll', { params: filters });
         setCategories(data.data);
         setPagination({
            _total: data.total,
            _limit: data.per_page,
         });
         setLoading(false);
      })();
   }, [filters]);

   useEffect(() => {
      setValue('name', selectCategory?.name ?? '');
   }, [selectCategory, setValue]);

   const updateCategory = async (id, data) => {
      try {
         await axiosClient.patch('categories/' + id, data);
         toast.success('Cập nhật thành công');
      } catch (error) {
         toast.error('Cập nhật thất bại');
      }
   };

   const addCategory = async (data) => {
      try {
         await axiosClient.post('categories', data);
         toast.success('Thêm thành công');
      } catch (error) {
         toast.error('Thêm thất bại');
      }
   };

   const deleteCategory = async (id) => {
      try {
         await axiosClient.delete('categories/' + id);
         toast.success('Xóa thành công');
      } catch (error) {
         toast.error('Xóa thất bại');
      }
   };

   const cancelEdit = () => {
      setSelectCategory(null);
   };

   const handleFormSubmit = async ({ name }) => {
      const data = { name };
      setLoading(true);
      if (selectCategory) {
         await updateCategory(selectCategory.id, data);
         cancelEdit();
         setFilters({ ...filters });
      } else {
         await addCategory(data);
         setFilters({ page: 1 });
      }
      setLoading(false);
      reset();
   };

   const handleRemoveClick = (categoryRemoved) => {
      modal({
         type: 'warning',
         title: `Xóa '${categoryRemoved.name}'`,
         content: 'Xóa mà không thể khôi phục?',
         onSubmit: () => {
            deleteCategory(categoryRemoved.id);
            setSelectCategory(null);
            setFilters({ ...filters });
         },
      });
   };

   return (
      <>
         <Box>
            <Box className={classes.title}>
               <Typography variant='h5'>Quản lý danh mục</Typography>{' '}
            </Box>

            <Box component={Paper} sx={{ my: 2, px: 2, pb: 2 }}>
               <Box component={'form'} onSubmit={handleSubmit(handleFormSubmit)}>
                  <Controller
                     control={control}
                     name='name'
                     render={({ field, fieldState }) => (
                        <InputField field={field} fieldState={fieldState} label='Tên danh mục' />
                     )}
                  />

                  <Button variant='contained' color='primary' size='small' type='submit'>
                     {isEdit ? 'Cập nhật' : 'Thêm mới'}
                  </Button>
                  {isEdit && (
                     <Button
                        sx={{ ml: 1 }}
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={cancelEdit}
                     >
                        Hủy
                     </Button>
                  )}
               </Box>
            </Box>

            <TableContainer component={Paper}>
               <Table size='small' aria-label='simple table'>
                  <TableHead>
                     <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tên danh mục</TableCell>
                        <TableCell align='right'>Thao tác</TableCell>
                     </TableRow>
                  </TableHead>

                  <TableBody>
                     {categories.map((item) => (
                        <TableRow key={item.id}>
                           <TableCell>{item.id}</TableCell>
                           <TableCell>{item.name}</TableCell>
                           <TableCell align='right'>
                              <Button
                                 size='small'
                                 color='info'
                                 variant='outlined'
                                 onClick={() => setSelectCategory(item)}
                              >
                                 Sửa
                              </Button>

                              <Button
                                 size='small'
                                 color='error'
                                 variant='contained'
                                 sx={{ ml: 1 }}
                                 onClick={() => handleRemoveClick(item)}
                              >
                                 Xóa
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>

            <Box my={2} display='flex' justifyContent='center'>
               <Pagination
                  page={filters.page}
                  count={Math.ceil(pagination._total / pagination._limit) || 0}
                  color='primary'
                  onChange={(e, page) => setFilters({ ...filters, page })}
               />
            </Box>
         </Box>

         <Backdrop style={{ color: '#fff', zIndex: 1000 }} open={loading}>
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </>
   );
};

export default CategoryManagement;
