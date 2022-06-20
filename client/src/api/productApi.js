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

   getReviews(data) {
      return axiosClient.post('product_reviews', data);
   },

   review(data) {
      return axiosClient.post('review', data);
   },

   getRelated(id) {
      return axiosClient.get(`related/${id}`);
   },

   getAll(params) {
      return axiosClient.get('products', { params });
   },

   create(data) {
      return axiosClient.post('products/create', data);
   },

   update(data, id) {
      return axiosClient.patch('products/update/' + id, data);
   },

   delete(id) {
      return axiosClient.delete('products/delete/' + id);
   },

   deleteImage(data) {
      return axiosClient.post('products/delete_image', data);
   },
};
