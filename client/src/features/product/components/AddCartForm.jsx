import { Box, Button } from '@mui/material';
import QuantityField from 'components/FormControl/QuantityField';
import React from 'react';

const AddCartForm = (props) => {
   return (
      <Box>
         <QuantityField />
         <Button variant='contained' sx={{ mt: 2 }}>
            Thêm vào giỏ hàng
         </Button>
      </Box>
   );
};

export default AddCartForm;
