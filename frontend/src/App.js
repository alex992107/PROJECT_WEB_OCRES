import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import Accueil from './pages/accueil.jsx';
import Home from './pages/home.jsx';
import Travail from './pages/travail.jsx';
import Vacance from './pages/vacance.jsx';
import Rvacance from './pages/r_vacance.jsx';
import Error from './pages/error.jsx'

import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <TopNav/>
          <div className="Content"> 
            <Sidebar/> 
            <Router>
            <Routes>
              <Route path="/" element={<Accueil/>}/>
                <Route path="/accueil" element={<Accueil/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/travail" element={<Travail/>}/>
                <Route path="/vacance" element={<Vacance/>}/>
                <Route path="/r_vacance" element={<Rvacance/>}/>
                <Route path="*" element={<Error/>}/>
              </Routes>
            </Router>
          </div>
      </div>
  );
}

//classname mid
// dans mid 80/20%
// dans  80 tas 20/80 horizontal
// dans 20% tas 50/50 horizontal
// dans les 2 50% tas 20/80 horizontal

export default App;