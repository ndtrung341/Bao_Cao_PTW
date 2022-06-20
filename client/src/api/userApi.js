import axiosClient from './axiosClient';
export const userApi = {
   getAll(data) {
      return axiosClient.get('users', { data });
   },

   updateRole(userId, role) {
      return axiosClient.post('users/role', { id: userId, role });
   },

   delete(userId) {
      return axiosClient.delete('users/' + userId);
   },
};
