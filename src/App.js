import './App.css';
import Header from './componentes/Header';
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router} from 'react-router-dom';
import Misroutes from './Misrutas';
function App() {
  return (
    <Container fluid>
      <Router>
      <Header />
      <Misroutes />
      </Router>
    </Container>
  );
}

export default App;
