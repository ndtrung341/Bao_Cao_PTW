import axiosClient from './axiosClient';

export const cartApi = {
   updateItem(params) {
      return axiosClient.post('cart/update', params);
   },

   addItem(params) {
      return axiosClient.post('cart/add_cart', params);
   },

   get() {
      return axiosClient.post('cart/get');
   },

   removeItem(productId) {
      const params = { productId: productId };
      return axiosClient.post('cart/remove', params);
   },
};
