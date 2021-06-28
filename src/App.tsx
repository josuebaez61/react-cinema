import React from 'react';
import './App.scss';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import CartProvider from './context/CartContext';

function App() {
  return (
    <Provider store={ store }>
      {/*  Redux Provider */}
      <CartProvider>
         {/*  Cart Context Provider */}
        <AppRouter />
      </CartProvider>
    </Provider>
  );
}

export default App;
