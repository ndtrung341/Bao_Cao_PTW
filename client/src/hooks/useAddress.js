import { useCallback, useEffect, useState } from 'react';
import { locationApi } from 'api/locationApi';

const useAddress = () => {
   const [state, setState] = useState({
      provinceOptions: [],
      districtOptions: [],
      wardOptions: [],
   });

   const mappingOptions = useCallback(
      (data, getValue, getLabel) =>
         data.map((item) => ({ value: getValue(item), label: getLabel(item) })),
      []
   );

   const handleProvinceSelected = async (provinceId) => {
      if (!provinceId) return;

      try {
         const { results } = await locationApi.getDistricts(provinceId);

         const districtOptions = mappingOptions(
            results,
            (item) => item.district_id,
            (item) => item.district_name
         );

         setState({
            ...state,
            districtOptions,
            wardOptions: [],
         });
      } catch (error) {
         console.log(error);
      }
   };

   const handleDistrictSelected = async (districtId) => {
      if (!districtId) return;
      try {
         const { results } = await locationApi.getWards(districtId);

         const wardOptions = mappingOptions(
            results,
            (item) => item.ward_id,
            (item) => item.ward_name
         );

         setState({
            ...state,
            wardOptions,
         });
      } catch (error) {
         console.log(error);
      }
   };

   // fetch province list
   useEffect(() => {
      (async () => {
         try {
            const { results } = await locationApi.getProvinces();

            const provinceOptions = mappingOptions(
               results,
               (item) => item.province_id,
               (item) => item.province_name
            );

            setState((state) => ({
               ...state,
               provinceOptions,
            }));
         } catch (error) {
            console.log(error);
         }
      })();
   }, [mappingOptions]);

   return {
      state,
      handleProvinceSelected,
      handleDistrictSelected,
   };
};

export default useAddress;
