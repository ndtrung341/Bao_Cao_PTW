import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <React.Suspense fallback={''}>
         <Header />
         <Routes>
            <Route path='' element={<HomePage />} />
         </Routes>
      </React.Suspense>
   );
}

export default App;
