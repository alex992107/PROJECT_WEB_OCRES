import React from 'react';

import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import Button from './components/Button.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
      <div className="App">
        <TopNav/>
        <Sidebar/>
        <Button/>
      </div>
  );
}




export default App;


