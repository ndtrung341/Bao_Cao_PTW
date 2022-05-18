import { makeStyles } from '@material-ui/core';
import { Container, Grid, Pagination, Skeleton } from '@mui/material';
import ProductFilterForm from 'components/Collection/ProductFilterForm';
import ProductList from 'components/Collection/ProductList';
import ProductSort from 'components/Collection/ProductSort';
import Breadcrumb from 'components/Common/Breadcrumb';
import SkeletonFilterForm from 'components/Skeleton/SkeletonProductFilterForm';
import SkeletonProductList from 'components/Skeleton/SkeletonProductList';
import useCollectionQuery from 'hooks/useCollectionQuery';
import React, { useMemo } from 'react';
import { capitalize } from 'utils';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
   selectCollection,
   selectCollectionLoading,
   selectFilters,
   selectPagination,
} from 'redux/collectionSlice';

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

const Collection = () => {
   const location = useLocation();
   const classes = useStyles();
   const collection = useSelector(selectCollection);
   const pagination = useSelector(selectPagination);
   const filterOptions = useSelector(selectFilters);
   const loading = useSelector(selectCollectionLoading);
   const { filters, syncFiltersURL } = useCollectionQuery(location.pathname);

   const pageTitle = useMemo(() => {
      const match = location.pathname.match(/\/(.+)\/(.+)/);
      return [match[1], match[2]].map(capitalize);
   }, [location.pathname]);

   const handlePageChange = (e, page) => {
      syncFiltersURL({ ...filters, page });
   };

   const handleSortChange = (sort, order) => {
      syncFiltersURL({ ...filters, sort, order, page: 1 });
   };

   return (
      <>
         <Helmet>
            <title>{`${pageTitle[1]} | ${pageTitle[0]}`}</title>
         </Helmet>

         <Breadcrumb parent={pageTitle[0]} title={pageTitle[1]} />

         <Container sx={{ mb: 3 }}>
            <Grid container spacing={1}>
               <Grid item className={classes.left}>
                  {loading ? (
                     <SkeletonFilterForm />
                  ) : (
                     <ProductFilterForm
                        onFiltersChange={syncFiltersURL}
                        filterOptions={filterOptions}
                        filters={filters}
                     />
                  )}
               </Grid>
               <Grid item className={classes.right}>
                  {loading ? (
                     <>
                        <Skeleton variant='rectangular' height={30} sx={{ mb: 2 }} />
                        <SkeletonProductList length={12} />
                     </>
                  ) : (
                     <>
                        {/* sort */}
                        <ProductSort
                           onSortChange={handleSortChange}
                           values={{ sort: filters.sort, order: filters.order }}
                        />
                        {/* product list */}
                        <ProductList productList={collection} />
                        {/* pagination */}
                        <Pagination
                           className={classes.pagination}
                           page={pagination._page}
                           count={Math.ceil(pagination._total / pagination._limit)}
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

export default Collection;
