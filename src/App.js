import './App.css';
import Header from './componentes/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Misroutes from './Misrutas';
import CartContextProvider from './contexts/CartContex';
function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <div className="container-fluid">
          <Misroutes />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
