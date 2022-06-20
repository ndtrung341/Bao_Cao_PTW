import axiosClient from './axiosClient';

export const orderApi = {
   placeOrder(params) {
      return axiosClient.post('order/place_order', params);
   },

   getHistory() {
      return axiosClient.get('order/history');
   },

   getUserPurchaseList(params) {
      return axiosClient.get('order/history', { params });
   },

   cancelOrder(orderId) {
      return axiosClient.post('order/cancel', { id: orderId });
   },

   confirmOrder(orderId) {
      return axiosClient.post('order/confirm', { id: orderId });
   },
   completeOrder(orderId) {
      return axiosClient.post('order/complete', { id: orderId });
   },

   getAll(params) {
      return axiosClient.get('order', { params });
   },

   delete(id) {
      return axiosClient.delete('order/' + id);
   },
};
