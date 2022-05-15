import axiosClient from './axiosClient';

export const orderApi = {
   placeOrder(params) {
      return axiosClient.post('order/place_order', params);
   },
   getHistory() {
      return axiosClient.get('order/history');
   },
};
