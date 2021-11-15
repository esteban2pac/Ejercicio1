import './App.css';
import Header from './componentes/Header';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom';
import Misroutes from './Misrutas';
import CartContextProvider from './contexts/CartContex';
function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Container>
          <Misroutes />
        </Container>
      </Router>
    </CartContextProvider>
  );
}

export default App;
