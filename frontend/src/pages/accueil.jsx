import React from "react";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Row,Col } from 'react-bootstrap';



function Accueil(){
    return(
      <Container >
        <Row xs={3} md={3} lg={0}>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="bordure">
            1er colonne
            80%
          </div>
          </Col>
          <Col>
          <div className="bordure">
            2nd colonne
            20%
          </div>
          </Col>
        </Row>
      </Container>
    )

}

export default Accueil