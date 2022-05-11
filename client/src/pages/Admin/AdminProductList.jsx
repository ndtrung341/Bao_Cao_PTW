import { makeStyles } from '@material-ui/core';
import { Box, Button, Container, Pagination, Typography } from '@mui/material';
import { productApi } from 'api/productApi';
import ProductTable from 'components/Admin/ProductTable';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   title: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
   },
}));

const AdminProductList = () => {
   const classes = useStyles();
   const [loading, setLoading] = useState(false);
   const [productList, setProductList] = useState([]);
   const [pagination, setPagination] = useState({});
   const [filters, setFilters] = useState({
      page: 1,
   });

   useEffect(() => {
      (async () => {
         setLoading(true);

         const res = await productApi.getAll(filters);

         setProductList(res.data);
         setPagination(res.pagination);
         setLoading(false);
      })();
   }, [filters]);

   return (
      <Box>
         <Box className={classes.title}>
            <Typography variant='h4'>Danh sách sản phẩm</Typography>

            <Link to={`add`} style={{ textDecoration: 'none' }}>
               <Button variant='outlined' color='primary'>
                  Thêm sản phẩm
               </Button>
            </Link>
         </Box>

         <ProductTable productList={productList} />

         <Box my={2} display='flex' justifyContent='center'>
            <Pagination
               page={filters.page}
               count={Math.ceil(pagination._total / pagination._limit) || 0}
               color='primary'
               onChange={(e, page) => setFilters({ ...filters, page })}
            />
         </Box>
      </Box>
   );
};

export default AdminProductList;
