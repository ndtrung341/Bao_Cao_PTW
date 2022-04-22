import axios from 'axios';
import store from 'redux/store';
import { refreshToken } from 'redux/authSlice';
import { getToken, isTokenExpired } from 'utils/auth';

let isRefreshing = false;

const axiosClient = axios.create({
   baseURL: 'http://127.0.0.1:8000/api/v1/',
   headers: {
      'content-type': 'application/json',
   },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
   async function (config) {
      // Do something before request is sent
      const customHeaders = {};

      let token = getToken();

      if (token) {
         if (isTokenExpired(token) && !isRefreshing) {
            isRefreshing = true;
            console.log('refresh new token');

            const newToken = await store.dispatch(refreshToken()).unwrap();

            isRefreshing = false;
            console.log(newToken);
            token = newToken;
         }
         config.headers['Authorization'] = `Bearer ${token}`;
         // customHeaders.Authorization = `Bearer ${token}`;
      }

      return config;

      // return {
      //    ...config,
      //    headers: {
      //       ...customHeaders, // auto attach token
      //       ...config.headers, // but you can override for some requests
      //    },
      // };
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
      // Do something with response error
      return Promise.reject(error);
   }
);

export default axiosClient;
