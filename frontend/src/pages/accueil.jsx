import React from "react";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Row,Col } from 'react-bootstrap';



function Accueil(){
    return(
      <Container >
        <Row>
          <Col>
            1er colonne
            80%
          </Col>
          <Col>
            2nd colonne
            20%
          </Col>
        </Row>
      </Container>
    )

}

export default Accueil