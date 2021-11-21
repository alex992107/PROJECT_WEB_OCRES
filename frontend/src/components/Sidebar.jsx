import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData.jsx";
import { Container,Row,Col } from 'react-bootstrap';

//div className en bootstrap ??

function Sidebar(){
    return(
    <div className="bordure">
        <Container>
        <Row>
            <Col>
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
        </Row>
        </Container>
    </div>
        
    )
}

export default Sidebar