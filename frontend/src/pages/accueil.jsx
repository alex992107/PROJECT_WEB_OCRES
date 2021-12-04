import React from "react";

import '../App.css';


function Accueil(){
    return(
      <div>
        <div className="Mid">
            <div className="Col80">
                <h1>Affichage</h1>
                Maison : Train depart Poissy
                <br/>
                Travail : Train départ Charles de Gaulle - Étoile direction Poissy
                <br/>
                Vacance : 
                <br/>
                Retour vacance :
                <br/>
                Incidents :
            </div>
            <div className="Col20">
                <div className="Col201">
                    <h2>Col 2 -1 20%</h2>
                </div>    
                <div className="Col202">
                    <h3>Nombre de requettes effectuées</h3>
                    <div className="pie">
                    </div>
                </div>   
            </div>    
        </div>
      </div>   
    )
}

export default Accueil