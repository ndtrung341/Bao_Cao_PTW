import React from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFilters, selectPagination } from '../collectionSlice';
// import { selectPagination } from '../productSlice';

const useStyles = makeStyles((theme) => ({
   root: {
      borderBottom: '1px solid #ccc',
      // borderTop: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
   },
}));

const ProductSort = ({ onFiltersChange }) => {
   const classes = useStyles();
   const pagination = useSelector(selectPagination);
   const filters = useSelector(selectFilters);

   const handleSortChange = (event) => {
      if (!onFiltersChange) return;
      const [sort, order] = event.target.value.split(':');
      // console.log({s*
      onFiltersChange({ ...filters, sort, order, page: 1 });
   };

   return (
      <Box className={classes.root}>
         <Typography>{`Hiển thị ${pagination._start} - ${pagination._end} trong ${pagination._total} kết quả`}</Typography>
         <Box sx={{ minWidth: 240 }}>
            <FormControl fullWidth>
               <InputLabel id='demo-simple-select-label' size='small'>
                  Sắp xếp
               </InputLabel>
               <Select
                  size='small'
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Sắp xếp'
                  value={`${filters.sort || 'id'}:${filters.order || 'desc'}`}
                  onChange={handleSortChange}
               >
                  <MenuItem value='id:desc'>Mới nhát</MenuItem>
                  <MenuItem value='salePrice:asc'>Theo giá: Từ thấp tới cao</MenuItem>
                  <MenuItem value='salePrice:desc'>Theo giá: Từ cao tới thấp</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </Box>
   );
};

export default ProductSort;
