import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItemStorage } from 'utils';

const PrivateRoute = ({ roles = ['admin', 'user'] }) => {
   const user = getItemStorage('user');

   const isLoggedIn = Boolean(user);
   const hasRole = isLoggedIn && roles.includes(user.role);

   return isLoggedIn ? (
      hasRole ? (
         <Outlet />
      ) : (
         <Navigate to={'404'} replace />
      )
   ) : (
      <Navigate to={'/auth/login'} replace />
   );
};

export default PrivateRoute;
