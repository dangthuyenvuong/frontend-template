import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { routerConfig, AppProvider } from './core';
import { reducers } from './redux';
import { routers } from './routers';
import en from './locale/en'
import vi from './locale/vi'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider reducers={reducers} translate={{ en, vi }} language="en">
      <Suspense fallback={<div>Loading....</div>}>
        {routerConfig(routers)}
      </Suspense>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
