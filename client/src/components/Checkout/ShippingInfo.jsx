import React from 'react';
import { Controller } from 'react-hook-form';
import InputField from 'components/FormFields/InputField';
import { Paper, Typography } from '@mui/material';
import useAddress from 'hooks/useAddress';
import AutocompleteField from 'components/FormFields/AutocompleteField';

const ShippingInfo = ({ form }) => {
   const { control, setValue } = form;
   const { state, handleDistrictSelected, handleProvinceSelected } = useAddress();
   const { provinceOptions, districtOptions, wardOptions } = state;

   return (
      <Paper sx={{ p: 3, mb: 2 }}>
         <Typography variant='h6' mb={1}>
            Thông tin giao hàng
         </Typography>

         <Controller
            control={control}
            name='customerName'
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
               <AutocompleteField
                  field={field}
                  fieldState={fieldState}
                  label={'Tỉnh/Thành phố'}
                  options={provinceOptions}
                  onChange={(option) => {
                     handleProvinceSelected(option.value);
                     setValue('district', '');
                     setValue('ward', '');
                  }}
               />
            )}
         />

         <Controller
            control={control}
            name='district'
            render={({ field, fieldState }) => (
               <AutocompleteField
                  field={field}
                  fieldState={fieldState}
                  label={'Quận/Huyện'}
                  options={districtOptions}
                  onChange={(option) => {
                     handleDistrictSelected(option.value);
                     setValue('ward', '');
                  }}
               />
            )}
         />

         <Controller
            control={control}
            name='ward'
            render={({ field, fieldState }) => (
               <AutocompleteField
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
