import React from "react";
import TrainIcon from '@mui/icons-material/Train';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import "../App.css";

import accueil from '../pages/accueil.jsx';

import {Navbar} from 'react-bootstrap'

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