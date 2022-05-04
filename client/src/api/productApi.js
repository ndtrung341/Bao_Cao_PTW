import axiosClient from './axiosClient';

export const productApi = {
   getBestSeller() {
      return axiosClient.get('best_seller');
   },
   getLatest() {
      return axiosClient.get('latest_products');
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
