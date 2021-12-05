import React from "react";
import TaffApiTrainJ from "../API/TaffApiTrainJ";

class r_vacance extends React.Component{
    state = {clé : "841d6f9d-c2de-4b6c-8a4d-047b0c8816a7"}

    handleChange = event => {this.setState({clé : event.target.value});}
    
    render(){
        const {clé} = this.state;

    return(
        <div className="Mid">
        <div className="Col80">
            <h2>Horaires des prochains départs (Saint Lazare)</h2>
            <br/>
            <div className="Affichage">
            <TaffApiTrainJ Nvlkey={clé}/>
            </div>
        </div>
        <div className="Col20">
                <div className ="Col201">
                <h3> Entrez la nouvelle clé API :</h3>
                <br/><br/>
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
    )}
}

export default r_vacance