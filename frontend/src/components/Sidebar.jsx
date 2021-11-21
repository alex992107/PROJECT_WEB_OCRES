import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "../App.css";
import {SidebarData} from "./SidebarData.jsx";
import { Container,Row,Col } from 'react-bootstrap';

import Accueil from '../pages/accueil.jsx';
import Home from '../pages/home.jsx';
import Travail from '../pages/travail.jsx';
import Vacance from '../pages/vacance.jsx';
import Rvacance from '../pages/r_vacance.jsx';


//div className en bootstrap ??

function Sidebar(){
    return(
        <div className="marge">
        <Container fluid="0">
        <Row>
            <Col xs={4} sm={3} md={2} lg={1} xl={1}>
                <div className="Side">
                    <ul className="SideList">
                          {SidebarData.map((val,key) => {
                          return (
                              <li key={key} 
                             className="Row"
                             id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {window.location.pathname = val.link}}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>   
                            </li>
                        );
                        })}   
                    </ul>
                </div>
            </Col>
            <Col xs={8} sm={9} md={10} lg={11} xl={11}>
            <Router>
              <Routes>
              <Route path="/accueil" element={<Accueil/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/travail" element={<Travail/>}/>
              <Route path="/vacance" element={<Vacance/>}/>
                <Route path="/r_vacance" element={<Rvacance/>}/>
              </Routes>
            </Router>
            
            </Col>
        </Row>
        </Container>  
        </div>
    )
}

export default Sidebar