import { Box, Button } from '@mui/material';
import QuantityField from 'components/FormControl/QuantityField';
import React, { useState } from 'react';

const AddCartForm = ({ onSubmit }) => {
   const [quantity, setQuantity] = useState(1);

   const handleQuantityChange = (value) => {
      setQuantity(value);
   };

   const handleAddButtonClick = () => {
      if (!onSubmit) return;
      onSubmit(quantity);
   };

   return (
      <Box>
         <QuantityField value={quantity} onChange={handleQuantityChange} />
         <Button variant='contained' sx={{ mt: 2 }} onClick={handleAddButtonClick}>
            Thêm vào giỏ hàng
         </Button>
      </Box>
   );
};

export default AddCartForm;
