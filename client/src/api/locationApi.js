import axiosClient from './axiosClient';

export const locationApi = {
   getProvinces() {
      return axiosClient.get('https://vapi.vnappmob.com/api/province/');
   },

   getDistricts(provinceId) {
      return axiosClient.get('https://vapi.vnappmob.com/api/province/district/' + provinceId);
   },

   getWards(districtsId) {
      return axiosClient.get('https://vapi.vnappmob.com/api/province/ward/' + districtsId);
   },
};
