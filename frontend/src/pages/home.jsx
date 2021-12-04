import React from "react";
import ReactDOM from 'react-dom';
import '../App.css';
import HomeApiRerA from '../API/HomeApiRerA';

var KEY ="841d6f9d-c2de-4b6c-8a4d-047b0c8816a7";


class Home extends React.Component{

    state = {
        KEY
    }

    handleChange(event) {
        var value = event.target.value;
        KEY = event.target.value;
        this.setState({
            value
        });
      }
    
      affichage(){
          console.log(KEY);
          ReactDOM.hydrate(<HomeApiRerA APIKEY={KEY}/>, document.getElementById('root'));
      }

      refreshPage(){ 
        window.location.reload(); 
    }
    
render(){
    return(
        <div className="Mid">
            <div className="Col80">
                <h2>Horaires des prochains départs</h2>
                <button onClick={this.refreshPage }>Afficher les horaires</button>
                <br/>
                <HomeApiRerA APIKEY={KEY}/>
            
            </div>
            <div className="Col20">
                <div className ="Col201">
                <h3> Entrez la nouvelle clé API :</h3>
                <input type="text" value={KEY}
                onChange={event => this.handleChange(event)}
                />
            </div>
            <div className="Col202">
                    <h3>Incidents signalés</h3>
                    Aucun incident n'a été signalé sur votre ligne
                </div>   
            </div>    
    </div>
    )
}
}

export default Home