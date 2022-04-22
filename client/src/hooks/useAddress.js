import React, { useCallback, useEffect, useState } from 'react';
import { locationApi } from 'api/locationApi';

const useAddress = () => {
   const [state, setState] = useState({
      provinceOptions: [],
      districtOptions: [],
      wardOptions: [],
      provinceIdSelected: null,
      districtIdSelected: null,
   });

   const mappingOptions = (data) =>
      data.map((item) => ({ value: item.id, label: item.name }));

   useEffect(() => {});

   // fetch province list
   useEffect(() => {
      (async () => {
         try {
            const { data } = await locationApi.getProvices();
            setState((state) => ({ ...state, provinceOptions: mappingOptions(data) }));
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   // fetch district list when province selected change
   useEffect(() => {
      const provinceId = state.provinceIdSelected;
      if (!provinceId) return;

      (async (provinceId) => {
         try {
            const { data } = await locationApi.getDistricts(provinceId);
            setState((state) => ({
               ...state,
               districtOptions: mappingOptions(data),
               wardOptions: [],
               districtIdSelected: null,
               wardIdSelected: null,
            }));
         } catch (error) {
            console.log(error);
         }
      })(provinceId);
   }, [state.provinceIdSelected]);

   // fetch ward options when districts selected change
   useEffect(() => {
      const districtId = state.districtIdSelected;
      if (!districtId) return;

      (async (districtId) => {
         try {
            const { data } = await locationApi.getWards(districtId);
            setState((state) => ({
               ...state,
               wardOptions: mappingOptions(data),
               wardIdSelected: null,
            }));
         } catch (error) {
            console.log(error);
         }
      })(districtId);
   }, [state.districtIdSelected]);

   const handleProvinceSelect = (provinceIdSelected) => {
      setState({ ...state, provinceIdSelected });
   };

   const handleDistrictSelect = (districtIdSelected) => {
      setState({ ...state, districtIdSelected });
   };

   return {
      state,
      handleProvinceSelect,
      handleDistrictSelect,
   };
};

export default useAddress;
