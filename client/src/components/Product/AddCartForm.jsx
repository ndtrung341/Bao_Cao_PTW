import { Box, Button, Typography } from '@mui/material';
import QuantityField from 'components/FormFields/QuantityField';
import React, { useState } from 'react';

const AddCartForm = ({ onSubmit, maxQty }) => {
   const [quantity, setQuantity] = useState(1);

   const handleQuantityChange = (value) => {
      setQuantity(value);
   };

   const handleAddButtonClick = () => {
      onSubmit?.(quantity);
   };

   return (
      <Box>
         <Box display={'flex'} alignItems='center'>
            <QuantityField value={quantity} onChange={handleQuantityChange} max={maxQty} min={1} />
            <Typography sx={{ ml: 2 }}>{maxQty} sản phẩm có sẵn</Typography>
         </Box>
         <Button variant='contained' sx={{ mt: 2 }} onClick={handleAddButtonClick}>
            Thêm vào giỏ hàng
         </Button>
      </Box>
   );
};

export default AddCartForm;
