import React from "react";
import TrainIcon from '@mui/icons-material/Train';

import "../App.css";
import {Navbar} from 'react-bootstrap'
import Button from "@restart/ui/esm/Button";

function TopNav(){
    return(
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand href='home'>
            <div className="Navig">
            <TrainIcon/> Dashboard
            </div>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Bienvenue, Clément Constantin !  
          </Navbar.Text>
          <Button variant="outlined" color="red">Se déconnecter</Button>
          </Navbar.Collapse>
          
        </Navbar>
    )
}

export default TopNav