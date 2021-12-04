import React from "react";
import '../global'
import '../App.css';

function Accueil(){
    return(
      <div>
        <div className="Mid">
            <div className="Col80">
                <h1>Affichage</h1>
                Poissy-ECE : 
                <br/>
                RER départ Poissy direction Marne-la-Vallée Chessy ou Boissy-Saint-Léger, arrêt à Étoile
                <br/><br/>

                ECE-Poissy : 
                <br/>
                RER départ Étoile direction Poissy
                <br/><br/>

                Poissy-Saint Lazare : 
                <br/>
                Train départ Poissy direction Saint Lazare
                <br/><br/>

                Saint Lazare-Poissy: 
                <br/>
                Train départ Saint Lazare direction Mantes-la-Jolie, arrêt à Poissy
                <br/><br/>
            </div>
            <div className="Col20"> 
                <div className="Col201">
                    <h3>Requettes effectuées</h3>
                    <div className="pie">
                    </div>
                </div>  
                <div className="Col202">
                    <h3>Incidents signalés</h3>
                    Aucun incident n'a été signalé sur votre ligne

                </div> 
            </div>    
        </div>
      </div>   
    )
}

export default Accueil