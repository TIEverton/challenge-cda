import React from 'react';
import { Provider } from 'react-redux'

import store from './store';

import { Routes } from './routes';
import GlobalStyle from './styles/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider
        store={store}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
