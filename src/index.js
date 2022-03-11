import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/styles/main.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import StatesContextProvider from './hooks/ContextHooks/StatesContext'
import AuthProvider from "./hooks/ContextHooks/AuthContext";
import ProfileConfigurationProvider from "./hooks/ContextHooks/ProfileContext";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProfileConfigurationProvider>
          <StatesContextProvider>
            <App />
          </StatesContextProvider>
        </ProfileConfigurationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
