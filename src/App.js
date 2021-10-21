import './App.css';
import Header from './componentes/Header';
import Container from 'react-bootstrap/Container'
import Product from './componentes/Product'
import Gridproduct from './componentes/GridProduct';
import {BrowserRouter as Router} from 'react-router-dom';
import Misroutes from './Misrutas';
function App() {
  return (
    <Container fluid>
      <Router>
      <Header />
      <Product />
      <Misroutes />
      </Router>
    </Container>
  );
}

export default App;
