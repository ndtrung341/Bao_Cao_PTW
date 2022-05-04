import axios from 'axios';
import { refreshToken } from 'redux/authSlice';
import { removeItemStorage } from 'utils';
import { getToken, isTokenExpired } from 'utils/auth';

let refreshTokenRequest = null;

const axiosClient = axios.create({
   baseURL: 'http://127.0.0.1:8000/api/',
   headers: {
      'content-type': 'application/json',
   },
});

// Add a request interceptor
export const setupAxios = (store) => {
   axiosClient.interceptors.request.use(
      async function (config) {
         let token = getToken();
         if (token) {
            if (isTokenExpired(token) && config.url !== 'auth/token') {
               refreshTokenRequest = refreshTokenRequest
                  ? refreshTokenRequest
                  : store.dispatch(refreshToken());

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
   function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error;
      const { config, data, status } = error.response;
      if (config.url === 'auth/token' && status === 401) {
         removeItemStorage('access_token');
      }
      throw new Error(data.message);
      return Promise.reject(error);
   }
);

export default axiosClient;
