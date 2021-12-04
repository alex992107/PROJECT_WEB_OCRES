import React from "react";
import TaffApiRerA from '../API/TaffApiRerA';


function Travail(){
    return(
        <div className="Mid">
            <div className="Col80">
                <h1>Horaires des prochains départs</h1>
                <br/>
                <TaffApiRerA/>
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
    )
}

export default Travail