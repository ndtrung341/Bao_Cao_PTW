import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import React from 'react';

const AutocompleteField = ({ field, fieldState, label, options, multiple = false }) => {
   const { name, onChange } = { ...field };
   const { invalid, error } = fieldState;

   return (
      <FormControl fullWidth margin='normal' error={invalid}>
         <Autocomplete
            multiple={multiple}
            fullWidth
            name={name}
            size={'small'}
            options={options}
            getOptionLabel={(option) => option.label || ''}
            onChange={(e, value) => onChange(value)}
            renderInput={(params) => <TextField {...params} label={label} />}
         />
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

export default AutocompleteField;
