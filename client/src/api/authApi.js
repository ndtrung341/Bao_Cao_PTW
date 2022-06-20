import axiosClient from './axiosClient';
export const authApi = {
   register(data) {
      return axiosClient.post('auth/register', data);
   },

   login(data) {
      return axiosClient.post('auth/login', data);
   },

   logout() {
      return axiosClient.post('auth/logout');
   },

   getMe() {
      return axiosClient.post('auth/me');
   },

   refreshToken() {
      return axiosClient.post('auth/token');
   },

   verify(data) {
      return axiosClient.post('auth/verify', data);
   },

   resend(data) {
      return axiosClient.post('auth/resend', data);
   },
};
