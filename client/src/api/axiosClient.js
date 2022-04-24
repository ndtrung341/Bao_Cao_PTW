import axios from 'axios';
import { refreshToken } from 'redux/authSlice';
import { getToken, isTokenExpired } from 'utils/auth';

let refreshTokenRequest = null;

const axiosClient = axios.create({
   baseURL: 'http://127.0.0.1:8000/api/v1/',
   headers: {
      'content-type': 'application/json',
   },
});

// Add a request interceptor
export const setupAxios = (store) => {
   axiosClient.interceptors.request.use(
      async function (config) {
         // Do something before request is sent
         let token = getToken();

         if (token) {
            if (isTokenExpired(token) && config.url !== 'auth/token') {
               refreshTokenRequest = refreshTokenRequest
                  ? refreshTokenRequest
                  : store.dispatch(refreshToken()).unwrap();

               token = await refreshTokenRequest;
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
};

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
