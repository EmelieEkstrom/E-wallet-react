import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/**
 * Store - Vårat state, det vill spara i Redux
 * Reducer - Själva logiken för att uppdatera vår store
 * Actions - Triggar igång en uppdatering i en reducer
 * Dispatch - Triggar igång en action i en komponent
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
