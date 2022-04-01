import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import CartFeature from 'features/cart';
import NotFound from 'components/NotFound';
import AuthFeature from 'features/auth';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';
import Home from 'components/Home';
import ProductFeature from 'features/product';

function App() {
   return (
      <>
         <React.Suspense fallback={''}>
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route path='' element={<Home />} />
                  <Route path='product/*' element={<ProductFeature />} />
                  <Route path='cart/*' element={<CartFeature />} />
                  <Route path='404' element={<NotFound />} />
               </Route>

               <Route path='auth' element={<AuthLayout />}>
                  <Route path='*' element={<AuthFeature />} />
               </Route>

               {/* redirect to 404 page */}
               <Route path='*' element={<Navigate to='404' />} />
            </Routes>
         </React.Suspense>
      </>
   );
}

export default App;
