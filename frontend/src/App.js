import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import Accueil from './pages/accueil.jsx';
import Home from './pages/home.jsx';
import Travail from './pages/travail.jsx';
import Vacance from './pages/vacance.jsx';
import R_vacance from './pages/r_vacance.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <TopNav/>
        <Sidebar/>
    <Router>
      
      <Routes>
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/travail" element={<Travail/>}/>
      <Route path="/vacance" element={<Vacance/>}/>
      <Route path="/r_vacance" element={<R_vacance/>}/>

      </Routes>
    </Router>
    </div>
  );
}




export default App;


