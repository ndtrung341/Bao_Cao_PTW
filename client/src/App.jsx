import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

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
import AddEditProduct from 'pages/Admin/AddEditProduct';
import AdminProductList from 'pages/Admin/AdminProductList';

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
         </Route>

         {/* ROUTE ADMIN */}
         <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path='admin' element={<AdminLayout />}>
               <Route path='products'>
                  <Route path='' element={<AdminProductList />} />
                  <Route path=':id' element={<AddEditProduct />} />
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
