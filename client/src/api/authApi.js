import axiosClient from './axiosClient';
export const authApi = {
   checkUniqueEmail(email) {
      return axiosClient.post('auth/check_unique_email', { email });
   },

   register(data) {
      return axiosClient.post('auth/registry', data);
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
};
