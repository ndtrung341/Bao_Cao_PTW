import React, { useEffect } from 'react';
import { Container, Grid, Pagination, Skeleton } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import ProductList from '../components/ProductList';
import { makeStyles } from '@material-ui/core';
import ProductFilterForm from '../components/ProductFilterForm';
import ProductSort from '../components/ProductSort';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
   selectCollection,
   selectCollectionLoading,
   selectPagination,
   selectTotalPage,
   fetchCollection,
   collectionActions,
   selectFilters,
} from '../collectionSlice';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import useCollectionQuery from 'hooks/useCollectionQuery';
import SkeletonProductList from '../components/SkeletonProductList';
import SkeletonFilterForm from '../components/SkeletonFilterForm';
const useStyles = makeStyles((theme) => ({
   left: {
      width: 250,
      background: theme.palette.background.paper,
      flexShrink: 0,
   },
   right: {
      background: theme.palette.background.paper,
      flex: '1 1 0',
   },
   pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
   },
}));

const ListPage = () => {
   const classes = useStyles();
   const { filters, handleFiltersChange } = useCollectionQuery();
   const loading = useSelector(selectCollectionLoading);
   const collection = useSelector(selectCollection);
   const pagination = useSelector(selectPagination);
   const totalPage = useSelector(selectTotalPage);

   const handlePageChange = (event, page) => {
      const newFilters = {
         ...filters,
         page,
      };
      handleFiltersChange(newFilters);
   };

   return (
      <>
         <Helmet>
            <title>{'Tất cả sản phẩm'}</title>
         </Helmet>

         <Breadcrumb title={'Tất cả sản phẩm'} />

         <Container sx={{ mb: 3 }}>
            <Grid container spacing={1}>
               <Grid item className={classes.left}>
                  {loading ? (
                     <SkeletonFilterForm />
                  ) : (
                     <ProductFilterForm onFiltersChange={handleFiltersChange} />
                  )}
               </Grid>
               <Grid item className={classes.right}>
                  {loading ? (
                     <>
                        <Skeleton variant='rectangular' height={30} sx={{ mb: 2 }} />
                        <SkeletonProductList />
                     </>
                  ) : (
                     <>
                        {/* sort and limit */}
                        <ProductSort onFiltersChange={handleFiltersChange} />
                        {/* list product */}
                        <ProductList productList={collection} />
                        {/* pagination */}
                        <Pagination
                           className={classes.pagination}
                           page={pagination._page}
                           count={totalPage}
                           color='primary'
                           onChange={handlePageChange}
                        />
                     </>
                  )}
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default ListPage;
