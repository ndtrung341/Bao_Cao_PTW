import { getItemStorage } from './storage';
import jwt_decode from 'jwt-decode';

export const getToken = () => getItemStorage('access_token')?.['access_token'];

export const isTokenExpired = (token) => {
   const { exp } = jwt_decode(token);
   return exp * 1000 < new Date().getTime();
};
