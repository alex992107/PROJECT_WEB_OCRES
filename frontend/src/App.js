import React from 'react';

import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
      <div className="App">
        <TopNav/>
        <Sidebar/>
      </div>
  );
}


export default App;


