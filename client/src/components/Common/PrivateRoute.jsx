import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItemStorage } from 'utils';

const PrivateRoute = () => {
   const isLoggedIn = Boolean(getItemStorage('access_token'));
   return isLoggedIn ? <Outlet /> : <Navigate to={'/auth/login'} />;
};

export default PrivateRoute;
