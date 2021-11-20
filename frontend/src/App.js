import React from 'react';

import Sidebar from './components/Sidebar';
import NavigBar from './components/NavigBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  return (
      <div>
        <NavigBar/>
        <Sidebar/>
      </div>
  );
}

export default App;


