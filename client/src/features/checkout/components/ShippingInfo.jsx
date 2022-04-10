import React from 'react';
import { Controller } from 'react-hook-form';
import SelectField from 'components/FormControl/SelectField';
import InputField from 'components/FormControl/InputField';
import { Paper, Typography } from '@mui/material';

const ShippingInfo = ({ form }) => {
   const { control } = form;

   return (
      <Paper sx={{ p: 3, mb: 2 }}>
         <Typography variant='h6' mb={1}>
            Thông tin giao hàng
         </Typography>

         <Controller
            control={control}
            name='fullName'
            render={({ field, fieldState }) => (
               <InputField field={field} fieldState={fieldState} label='Họ tên' type='text' />
            )}
         />

         <Controller
            control={control}
            name='phone'
            render={({ field, fieldState }) => (
               <InputField
                  field={field}
                  fieldState={fieldState}
                  label={'Số điện thoại'}
                  type='text'
               />
            )}
         />

         <Controller
            control={control}
            name='province'
            render={({ field, fieldState }) => (
               <SelectField field={field} fieldState={fieldState} label={'Tỉnh/Thành phố'} />
            )}
         />

         <Controller
            control={control}
            name='district'
            render={({ field, fieldState }) => (
               <SelectField field={field} fieldState={fieldState} label={'Quận/Huyện'} />
            )}
         />

         <Controller
            control={control}
            name='ward'
            render={({ field, fieldState }) => (
               <SelectField field={field} fieldState={fieldState} label={'Phường/Xã'} />
            )}
         />
      </Paper>
   );
};

ShippingInfo.propTypes = {};

export default ShippingInfo;
