import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { CssBaseline } from '@material-ui/core';
import { setupAxiosRequest } from 'api/axiosClient';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

setupAxiosRequest(store);

const customTheme = createTheme({
   palette: {
      primary: {
         main: '#3f3fdb',
         contrastText: 'white',
      },
   },
   typography: {
      fontFamily: `'Nunito', sans-serif`,
      fontSize: 15,
      button: {
         textTransform: 'none',
      },
   },
});

const initPaypalOptions = {
   'client-id': 'AfssvtxLheed0qllinprUTgkToe3R4YoW4g8UYzPXWlCeOIOUAPHgpixLObah5mfsF_RLQ4WewFAWWZz',
};

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <HelmetProvider>
            <PayPalScriptProvider options={initPaypalOptions}>
               <ThemeProvider theme={customTheme}>
                  <CssBaseline />
                  <App />
               </ThemeProvider>
            </PayPalScriptProvider>
         </HelmetProvider>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
