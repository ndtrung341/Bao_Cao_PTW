import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import CartFeature from 'features/cart';

const CollectionsFeature = React.lazy(() => import('features/collections'));
const ProductFeature = React.lazy(() => import('features/product'));
const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <React.Suspense fallback={''}>
         <Header />
         <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='collections' element={<CollectionsFeature />} />
            <Route path='product/*' element={<ProductFeature />} />
            <Route path='cart/*' element={<CartFeature />}></Route>}
         </Routes>
      </React.Suspense>
   );
}

export default App;
