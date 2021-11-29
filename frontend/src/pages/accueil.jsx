import React from "react";

import '../App.css';

function Accueil(){
    return(
      <div className="Mid">
        <div className="Col80">
        <h1>Col 1 80%</h1>
        <br/>
        1 header titre h1 et un bloc en dessous
        <br/>
        1-2-3-4-5-6-7-8-9-1-2-3-4-5-6-7-8-9-1-2-3-4-5-6-7-8-9-1-2-3-4-5-6-7-8-9-1-2-3-4-5-6-7-8-9
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