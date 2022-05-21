import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store}  from './store/store';
import App from './App';

import './index.css'
import { BrowserRouter } from 'react-router-dom';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

  <Provider store={store}>

  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
     </StrictMode>
     </Provider>
  

);
