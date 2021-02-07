import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './contexts/appContext';
import './index.css';
import Main from './components/main';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Main />
    </AppProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

