import './App.css';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from '@mui/icons-material';
import HomePage from 'pages/HomePage';
function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='collections'></Route>
         </Routes>
      </>
   );
}

export default App;
