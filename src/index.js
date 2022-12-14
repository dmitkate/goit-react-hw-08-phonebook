import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import  App  from 'components/App';
import { Provider } from 'react-redux';
import{ store, persistor}from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from "@chakra-ui/react";
import './index.css';
//import getStoredState from 'redux-persist/lib/getStoredState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>  
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider>
            <App />
        </ChakraProvider>
      </BrowserRouter> 
    </PersistGate> 
    </Provider>    
  </React.StrictMode>
);
