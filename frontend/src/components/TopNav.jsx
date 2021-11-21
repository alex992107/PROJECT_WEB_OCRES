import React from "react";
import TrainIcon from '@mui/icons-material/Train';

import {BrowserRouter, Routes, Route } from 'react-router-dom';


import "../App.css";

import accueil from '../pages/accueil.jsx';

import {Navbar} from 'react-bootstrap'
import Button from "@restart/ui/esm/Button";

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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           Bienvenue, Clément Constantin !  
          </Navbar.Text>
          <Button variant="outlined" color="red">Se déconnecter</Button>
        </Navbar.Collapse> 
     </Navbar>
   </BrowserRouter>
  )
}

export default TopNav