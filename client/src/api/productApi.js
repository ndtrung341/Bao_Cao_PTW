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

   getAll(params, pathname) {
      return axiosClient.post('products', { pathname }, { params });
   },

   create(data) {
      return axiosClient.post('products', data);
   },

   update(data, id) {
      return axiosClient.patch('products/' + id, data);
   },

   deleteImage(data) {
      return axiosClient.post('products/delete_image', data);
   },
};
