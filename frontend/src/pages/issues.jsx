import React from "react";
import DateKeyApi from "../API/DateKeyApi";
import TimezoneApi from "../API/TimezoneApi";
import DateTimeApi from "../API/DateTimeApi";
import '../App.css';


function Issues(){
    return(
        <div className="Mid">
            <div className="Col80">
                <h2>Réglagles de l'API SNCF </h2>
                <br/>
                <DateKeyApi/><br/>
                <TimezoneApi/><br/>
                <DateTimeApi/>  
                GMT (UCT+00)
            </div>
            <div className="Col20">
                <div className="Col201">
                    <h3>Requettes effectuées</h3>
                    <div className="pie">
                    </div>
                </div>  
            </div>
        </div>   
    )
}

export default Issues