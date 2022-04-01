import React from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import { products } from 'data/product';
import ProductList from '../components/ProductList';
import { makeStyles } from '@material-ui/core';
import ProductFilterForm from '../components/ProductFilterForm';
import ProductSort from '../components/ProductSort';
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
   const productList = products.slice(0, 12);

   return (
      <Container>
         <Breadcrumb title={'Tất cả sản phẩm'} />
         <Grid container spacing={1}>
            <Grid item className={classes.left}>
               <ProductFilterForm />
            </Grid>
            <Grid item className={classes.right}>
               {/* sort and limit */}
               <ProductSort />
               {/* list product */}
               <ProductList productList={productList} />
               {/* pagination */}
               <Pagination className={classes.pagination} count={6} page={1} color='primary' />
            </Grid>
         </Grid>
      </Container>
   );
};

export default ListPage;
