import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import CartFeature from 'features/cart';
import NotFound from 'components/NotFound';
import AuthFeature from 'features/auth';
import MainLayout from 'layouts/MainLayout';
import FullScreenLayout from 'layouts/FullScreenLayout';

const CollectionsFeature = React.lazy(() => import('features/collections'));
const ProductFeature = React.lazy(() => import('features/product'));
const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <>
         <React.Suspense fallback={''}>
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route path='' />
                  <Route path='collections' element={<CollectionsFeature />} />
                  <Route path='product/*' element={<ProductFeature />} />
                  <Route path='cart/*' element={<CartFeature />}></Route>
                  {/* redirect to 404 page */}
                  <Route path='404' element={<NotFound />} />
               </Route>
               <Route path='auth' element={<FullScreenLayout />}>
                  <Route path='*' element={<AuthFeature/>}
               </Route>
               <Route path='*' element={<Navigate to='404' />} />
            </Routes>
         </React.Suspense>
      </>
   );
}

export default App;
