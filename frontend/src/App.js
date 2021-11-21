import React from 'react';


import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';

function App() {
  return (
    <div className="nopadding">
    <Container fluid="false">
      <Row>
        <Col>
          <div className="App">
            <TopNav/>
            <Sidebar/>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}




export default App;


