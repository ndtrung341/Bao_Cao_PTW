import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ProductFeature from 'features/product';

const CollectionsFeature = React.lazy(() => import('features/collections'));
const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <React.Suspense fallback={''}>
         <Header />
         <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='collections' element={<CollectionsFeature />} />
            <Route path='product/*' element={<ProductFeature />} />
         </Routes>
      </React.Suspense>
   );
}

export default App;
