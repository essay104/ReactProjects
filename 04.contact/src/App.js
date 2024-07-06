import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import ContactFrom from './components/ContactFrom';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <h1 className='title'>연락처</h1>
      <Container>
        <div className='gap'>
          <Row>
            <Col>
              <ContactFrom />
            </Col>
          </Row>
          <Row>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
