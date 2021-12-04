import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import Accueil from './pages/accueil.jsx';
import Home from './pages/home.jsx';
import Travail from './pages/travail.jsx';
import Vacance from './pages/vacance.jsx';
import Rvacance from './pages/r_vacance.jsx';
import Issues from './pages/issues.jsx'
import Error from './pages/error.jsx'
import Logout from './pages/logout.jsx'

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
                <Route path="/departPoissyRerA" element={<Home/>}/>
                <Route path="/departEtoileRerA" element={<Travail/>}/>
                <Route path="/departPoissyTrainJ" element={<Vacance/>}/>
                <Route path="/departStLazTrainJ" element={<Rvacance/>}/>
                <Route path="/issues" element={<Issues/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<Error/>}/>
              </Routes>
            </Router>
          </div>
      </div>
  );
}

export default App;