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

import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Fonction d'appel de nos widgets en fonction des routes
//Navbar et Sidebar toujours affichés, seul la les widgets changent en fonction de la route 
//La route * pointe sur toutes les autres valeurs de routes que celle présente dans le code, la route * pointe sur la page d'erreur. 

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
                <Route path="*" element={<Error/>}/>
              </Routes>
            </Router>
          </div>
      </div>
  );
}

export default App;