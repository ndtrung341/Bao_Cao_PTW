import { SearchOutlined } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import React from 'react';

const SearchBox = () => {
   return (
      <Box component={'form'}>
         <TextField
            size='medium'
            autoFocus
            margin='dense'
            variant='standard'
            name='q'
            placeholder='Nhập từ khóa ...'
            type='text'
            fullWidth
            InputProps={{
               disableUnderline: true,
               startAdornment: <SearchOutlined color='primary' sx={{ mr: 1 }} />,
            }}
         />
      </Box>
   );
};

export default SearchBox;
