import React from 'react';
import ReactDOM from 'react-dom/client';
import Routex from './routes';
import './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routex />
  </React.StrictMode>
);
