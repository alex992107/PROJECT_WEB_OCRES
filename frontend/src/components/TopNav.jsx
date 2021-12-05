import React from "react";
import {Navbar} from 'react-bootstrap';
import "../App.css";
import accueil from '../pages/accueil.jsx';

//Icone de la librairie MUI
import TrainIcon from '@mui/icons-material/Train';

//Import pour gérer les routes
import {BrowserRouter, Routes, Route } from 'react-router-dom';

//Cette fonction permet l'affichage de notre barre supérieur de navigation
//On y ajoute un titre, un logo et une route
//Cette fonction est plutôt graphique, elle permet de structurer le dashboard
//Cest la seul qui utilise la librairie bootstrap pour fonctionner, en effet {Navbar} est un composant de cette lib
function TopNav(){
  return(
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>  
        <Navbar.Brand href='/accueil'>
          <div className="Navig">
            <TrainIcon/> Dashboard
            <Routes>
              <Route exact path="/" component={accueil}/>
            </Routes>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
        <div className="Name">
          <Navbar.Text>
           Bienvenue ! 
          </Navbar.Text>
        </div>
        </Navbar.Collapse> 
     </Navbar>
   </BrowserRouter>
  )
}

export default TopNav