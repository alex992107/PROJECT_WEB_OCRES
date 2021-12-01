import React from "react";

import '../App.css';
import ClementAPI from '../API/ClementAPI';

function Accueil(){
    return(
      <div className="Mid">
        <div className="Col80">
        <h1>Col 1 80%</h1>
        <br/>
        <ClementAPI/>
        </div>
        <div className="Col20">
          <div className="Col201">
          <h2>Col 2 -1 20%</h2>
          </div>    
          <div className="Col202">
          <h3>Nombre de requettes effectuées</h3>
          <div className="pie" data-value="0">
            1
          </div>
          </div>   
        </div>    
    </div>     
    )
}

export default Accueil