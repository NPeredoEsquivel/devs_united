import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StatesContextProvider from './hooks/StatesContext'
import AuthProvider from "./hooks/AuthContext";
import ProvileConfigurationProvider from "./hooks/ProfileConfiguration";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProvileConfigurationProvider>
          <StatesContextProvider>
            <App />
          </StatesContextProvider>
        </ProvileConfigurationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
