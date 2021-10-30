import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { routerConfig, AppProvider } from './core';
import { reducers } from './store';
import { routers } from './routers';
import en from './locale/en/index.json'
import vi from './locale/vi/index.json'
import saga from 'store/saga';
import { ModalShoppingCart } from 'components/ModalShoppingCart';
import './custom.css'
import LoadingPage from 'components/LoadingPage';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider reducers={reducers} translate={{ en, vi }} language="en" saga={saga}>
      <ModalShoppingCart />
      <Suspense fallback={<LoadingPage />}>
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



// Permission
// 

// const permission = ['product:view', 'product:delete', 'product:create']