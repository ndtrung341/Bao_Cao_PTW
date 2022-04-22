import React from 'react';
import { Controller } from 'react-hook-form';
import SelectField from 'components/FormFields/SelectField';
import InputField from 'components/FormFields/InputField';
import { Paper, Typography } from '@mui/material';
import useAddress from 'hooks/useAddress';

const ShippingInfo = ({ form }) => {
   const { control } = form;
   const { state, handleDistrictSelect, handleProvinceSelect } = useAddress();
   const { provinceOptions, districtOptions, wardOptions } = state;

   return (
      <Paper sx={{ p: 3, mb: 2 }}>
         <Typography variant='h6' mb={1}>
            Thông tin giao hàng
         </Typography>

         <Controller
            control={control}
            name='fullName'
            render={({ field, fieldState }) => (
               <InputField
                  field={field}
                  fieldState={fieldState}
                  label='Họ tên'
                  type='text'
               />
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
               <SelectField
                  field={field}
                  fieldState={fieldState}
                  label={'Tỉnh/Thành phố'}
                  options={provinceOptions}
                  onChange={handleProvinceSelect}
               />
            )}
         />

         <Controller
            control={control}
            name='district'
            render={({ field, fieldState }) => (
               <SelectField
                  field={field}
                  fieldState={fieldState}
                  label={'Quận/Huyện'}
                  options={districtOptions}
                  onChange={handleDistrictSelect}
               />
            )}
         />

         <Controller
            control={control}
            name='ward'
            render={({ field, fieldState }) => (
               <SelectField
                  field={field}
                  fieldState={fieldState}
                  label={'Phường/Xã'}
                  options={wardOptions}
               />
            )}
         />
      </Paper>
   );
};

ShippingInfo.propTypes = {};

export default ShippingInfo;
