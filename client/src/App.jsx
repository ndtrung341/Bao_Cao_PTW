import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import NotFound from 'components/Common/NotFound';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Collection from 'pages/Collection';
import ProductDetail from 'pages/ProductDetail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import AdminLayout from 'components/Layouts/AdminLayout';
import PrivateRoute from 'components/Common/PrivateRoute';

import MainLayout from 'components/Layouts/MainLayout';
import AuthLayout from 'components/Layouts/AuthLayout';
import Forbidden from 'components/Common/Forbidden';
import AddEditProduct from 'pages/AddEditProduct';

function App() {
   return (
      <Routes>
         {/* ROUTE SHOP */}
         <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path=':slug' element={<ProductDetail />} />
            <Route path='collection' element={<Collection />} />

            <Route element={<PrivateRoute />}>
               <Route path='cart' element={<Cart />} />
               <Route path='checkout' element={<Checkout />} />
            </Route>

            <Route path='404' element={<NotFound />} />
            <Route path='403' element={<Forbidden />} />
         </Route>

         {/* ROUTE ADMIN */}
         <Route path='admin' element={<PrivateRoute roles={['admin']} />}>
            <Route element={<AdminLayout />}>
               <Route path='products'>
                  <Route path='add' element={<AddEditProduct />} />
               </Route>
            </Route>
         </Route>

         {/* ROUTE AUTH */}
         <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
         </Route>

         {/* redirect to 404 page */}
         <Route path='*' element={<Navigate to='404' />} />
      </Routes>
   );
}

export default App;
