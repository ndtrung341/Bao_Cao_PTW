import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItemStorage } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/authSlice';

const PrivateRoute = ({ roles = ['admin', 'user'] }) => {
   const user = getItemStorage('user');
   // const user = useSelector((state) => state.auth.currentUser);
   // console.log(user);
   const isLoggedIn = Boolean(user);
   // const isLoggedIn = useSelector(selectIsLoggedIn);
   console.log(isLoggedIn);
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
