import React from "react";
import CreationDateApi from "../API/CreationDateApi"
import DateKeyApi from "../API/DateKeyApi";
import TimezoneApi from "../API/TimezoneApi";
import DateTimeApi from "../API/DateTimeApi";


class Issues extends React.Component{
    state = {clé : "841d6f9d-c2de-4b6c-8a4d-047b0c8816a7"}

    handleChange = event => {this.setState({clé : event.target.value});}

    render(){
        const {clé} = this.state;

        return(
        <div className="Mid">
            <div className="Col80">
                <h2>Réglagles de l'API SNCF </h2>
                <br/>
                <CreationDateApi Nvlkey={clé}/><br/>
                <DateKeyApi Nvlkey={clé}/><br/>
                <TimezoneApi Nvlkey={clé}/><br/>
                <DateTimeApi Nvlkey={clé}/>  
            </div>
            <div className="Col20">
                <div className ="Col201">
                <h3> Entrez la nouvelle clé API :</h3>
                <input 
                    type="text" 
                    value={clé}
                    onChange={this.handleChange}
                />
            </div>
            <div className="Col202">
                    <h3>Incidents signalés</h3>
                    Aucun incident n'a été signalé sur votre ligne
                </div>   
            </div>
        </div>
    )};
}

export default Issues