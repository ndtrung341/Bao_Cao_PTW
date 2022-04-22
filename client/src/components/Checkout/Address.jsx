import SelectField from 'components/FormFields/SelectField';
import React from 'react';
import { Controller } from 'swiper';

const Address = ({ form }) => {
   const { control } = form;

   return (
      <>
         <Controller
            control={control}
            name='province'
            render={({ field, fieldState }) => (
               <SelectField
                  field={field}
                  fieldState={fieldState}
                  label={'Tỉnh/Thành phố'}
               />
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
      </>
   );
};

export default Address;
