import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentUser } from 'redux/authSlice';
import { getItemStorage } from 'utils';

const PrivateRoute = ({ roles = ['admin', 'user'] }) => {
   // const user = useSelector(selectCurrentUser);
   const user = getItemStorage('user');

   const isLoggedIn = Boolean(user);
   const hasRole = isLoggedIn && roles.includes(user.role);

   return isLoggedIn ? (
      hasRole ? (
         <Outlet />
      ) : (
         <Navigate to={'403'} replace />
      )
   ) : (
      <Navigate to={'/auth/login'} replace />
   );
};

export default PrivateRoute;
