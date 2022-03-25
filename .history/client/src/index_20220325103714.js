import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
const customTheme = createTheme({
   palette: {
      primary: '#3f3fdb',
   },
});
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
