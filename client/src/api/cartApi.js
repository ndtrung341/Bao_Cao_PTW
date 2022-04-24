import axiosClient from './axiosClient';

export const cartApi = {
   updateItem(params) {
      return axiosClient.post('cart/update', params);
   },

   addItem(params) {
      return axiosClient.post('cart/add_to_cart', params);
   },

   get() {
      return axiosClient.post('cart/get');
   },

   removeItem(productId) {
      console.log(productId);
      const params = { product_id: productId };
      return axiosClient.post('cart/remove', params);
   },
};
