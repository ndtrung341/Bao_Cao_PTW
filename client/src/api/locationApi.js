import axiosClient from './axiosClient';

export const locationApi = {
   getProvices() {
      return axiosClient.get('location/provinces');
   },

   getDistricts(provinceId) {
      return axiosClient.get('location/districts/' + provinceId);
   },

   getWards(districtsId) {
      return axiosClient.get('location/wards/' + districtsId);
   },
};
