import './App.css';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import CartFeature from 'features/cart';
import NotFound from 'components/NotFound';
import Footer from 'components/Footer';
import AuthFeature from 'features/auth';
import MainLayout from 'layouts/MainLayout';

const CollectionsFeature = React.lazy(() => import('features/collections'));
const ProductFeature = React.lazy(() => import('features/product'));
const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <>
         <React.Suspense fallback={''}>
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route path='' element />
                  <Route path='collections' element={<CollectionsFeature />} />
                  <Route path='product/*' element={<ProductFeature />} />
                  <Route path='cart/*' element={<CartFeature />}></Route>
                  {/* redirect to 404 page */}
                  <Route path='*' element={<Navigate to='404' />} />
                  <Route path='404' element={<NotFound />} />
               </Route>
               <Route path='user/*' element={<AuthFeature />} />
            </Routes>
         </React.Suspense>
      </>
   );
}

export default App;
