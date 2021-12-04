import React from "react";
import TaffApiRerA from '../API/TaffApiRerA';


function Travail(){
    return(
        <div className="Mid">
            <div className="Col80">
                <h2>Horaires des prochains départs</h2>
                <br/>
                <TaffApiRerA/>
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
    )
}

export default Travail