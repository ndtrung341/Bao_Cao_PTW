import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormHelperText, FormLabel } from '@mui/material';

const EditorField = ({ field, fieldState, label }) => {
   const { name, value, onChange } = { ...field };
   const { invalid, error } = fieldState;

   return (
      <FormControl fullWidth margin='normal' error={invalid}>
         <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
         <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
               const data = editor.getData();
               field.onChange(data);
            }}
         />
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

export default EditorField;
