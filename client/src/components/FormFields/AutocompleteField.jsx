import { Autocomplete, FormControl, TextField } from '@mui/material';
import React from 'react';

const AutocompleteField = ({ field, fieldState, label, options, multiple = false }) => {
   const { name, value } = field;
   const { invalid, error } = fieldState;

   return (
      <FormControl fullWidth margin='normal'>
         <Autocomplete
            multiple={multiple}
            fullWidth
            name={name}
            size={'small'}
            value={value || null}
            options={options}
            getOptionLabel={(option) => option.label || ''}
            onChange={(e, value) => field.onChange(value)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            renderInput={(params) => (
               <TextField
                  {...params}
                  label={label}
                  error={invalid}
                  helperText={error?.message}
               />
            )}
         />
      </FormControl>
   );
};

export default AutocompleteField;
