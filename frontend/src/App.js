import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import Button from './components/Button.jsx';
import home from './pages/home.jsx';
import travail from './pages/travail.jsx';
import vacance from './pages/vacance.jsx';
import r_vacance from './pages/vacance.jsx';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div className="App">
        <TopNav/>
        <Sidebar/>
        <Button/>
        <Routes>
        <Route exact path="/" component={home}/>
        <Route exact path="/" component={travail}/>
        <Route exact path="/" component={vacance}/>
        <Route exact path="/" component={r_vacance}/>
        </Routes>
      </div>
  );
}




export default App;


