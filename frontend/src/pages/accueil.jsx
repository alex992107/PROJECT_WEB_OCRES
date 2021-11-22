import React from "react";

import '../App.css';

function Accueil(){
    return(
      <div className="Mid">
        <div className="Col80">
        <h1>Col 1 80%</h1>
        <br/>
        1 header titre h1 et un bloc en dessous
        </div>
        <div className="Col20">
        Col 2 20%
        <br/>
        2 blocs dedans
        </div>           
    </div>
          
    )

}

export default Accueil