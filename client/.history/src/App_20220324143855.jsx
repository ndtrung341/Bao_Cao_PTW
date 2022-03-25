import './App.css';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from '@mui/icons-material';
import React from 'react';

const HomePage = React.lazy(() => import('pages/HomePage'));

function App() {
   return (
      <React.Suspense fallback={''}>
         <Header />
         <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='collections'></Route>
         </Routes>
      </React.Suspense>
   );
}

export default App;
