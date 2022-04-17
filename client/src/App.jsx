import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import NotFound from 'components/Common/NotFound';

import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Collection from 'pages/Collection';
import ProductDetail from 'pages/ProductDetail';
import Login from 'pages/Login';
import Register from 'pages/Register';

function App() {
   return (
      <Routes>
         <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path=':slug' element={<ProductDetail />} />
            <Route path='collection' element={<Collection />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='404' element={<NotFound />} />
         </Route>

         <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='Register' element={<Register />} />
         </Route>

         {/* redirect to 404 page */}
         <Route path='*' element={<Navigate to='404' />} />
      </Routes>
   );
}

export default App;
