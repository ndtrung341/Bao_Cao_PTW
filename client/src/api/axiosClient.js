import axios from 'axios';
import { logout, refreshToken } from 'redux/authSlice';
import { getToken, isTokenExpired } from 'utils/auth';
import { unwrapResult } from '@reduxjs/toolkit';
let refreshTokenRequest = null;

const axiosClient = axios.create({
   baseURL: 'http://localhost:8000/api/',
   headers: {
      'content-type': 'application/json',
   },
});

// Add a request interceptor
export const setupAxiosInterceptors = (store) => {
   axiosClient.interceptors.request.use(
      async function (config) {
         let token = getToken();
         if (token) {
            if (isTokenExpired(token) && config.url !== 'auth/token') {
               refreshTokenRequest = refreshTokenRequest
                  ? refreshTokenRequest
                  : store.dispatch(refreshToken());

               token = await refreshTokenRequest.unwrap();
               console.log(token);
               refreshTokenRequest = null;
            }
            config.headers.Authorization = `Bearer ${token}`;
         }
         return config;
      },
      function (error) {
         // Do something with request error
         return Promise.reject(error);
      }
   );

   // Add a response interceptor
   axiosClient.interceptors.response.use(
      function (response) {
         // Any status code that lie within the range of 2xx cause this function to trigger
         // Do something with response data
         return response.data;
      },
      async function (error) {
         // Any status codes that falls outside the range of 2xx cause this function to trigger
         // Do something with response error;
         // console.log(error);
         const { config, data, status } = error.response;
         if (config.url === 'auth/token' && status === 401) {
            store.dispatch(logout());
         } else {
            throw new Error(data.message);
         }
         return Promise.reject(error);
      }
   );
};

export default axiosClient;
