import React from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   root: {
      borderBottom: '1px solid #ccc',
      borderTop: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
   },
}));
const ProductSort = () => {
   const classes = useStyles();

   const handleSortChange = (event) => {
      console.log(event.value);
   };

   return (
      <Box className={classes.root}>
         <Typography>Hiển thị 1-12 trong 30 kết quả</Typography>
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
                  onChange={handleSortChange}
               >
                  <MenuItem value='salePrice:ASC'>Theo giá: Từ thấp tới cao</MenuItem>
                  <MenuItem value='salePrice:DESC'>Theo giá: Từ cao tới thấp</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </Box>
   );
};

export default ProductSort;
