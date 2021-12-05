import React from "react";
import '../App.css';
import MyApi from "../API/MyApi";

//Page d'accueil

//Explication de route de la side barre 
//Graphique ...
//Data de l'API Local

function Accueil(){
    return(
      <div>
        <div className="Mid">
            <div className="Col80">
                <h1>Affichage</h1>
                <div className="Affichage">
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
            </div>
            <div className="Col20"> 
                <div className="Col201">
                    <h3>Requettes effectuées</h3>
                    <div className="pie">
                    </div>
                </div>  
                <div className="Col202">
                    <h3>API MongoDB</h3>
                    CRUD
                    <MyApi/>
                </div> 
            </div>    
        </div>
      </div>   
    )
}

export default Accueil