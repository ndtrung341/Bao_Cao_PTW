import axiosClient from './axiosClient';

export const productApi = {
   getBestSeller() {
      return axiosClient.get('products/best-seller');
   },
   getLatest() {
      return axiosClient.get('products/latest');
   },
   get(id) {
      return axiosClient.get(`products/${id}`);
   },
   getRelated(id) {
      return axiosClient.get(`related/${id}`);
   },
   getAll(params) {
      return axiosClient.get('products', { params });
   },
};
