import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src='LogoTest.png' alt='moi'/>
          Logo
        </Navbar.Brand>

      </Navbar>
      
    </div>
  );
}

export default App;
