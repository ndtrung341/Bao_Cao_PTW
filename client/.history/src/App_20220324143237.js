import './App.css';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from '@mui/icons-material';
function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path=''>Trang Chủ</Route>
            <Route path='collections'></Route>
         </Routes>
      </>
   );
}

export default App;
