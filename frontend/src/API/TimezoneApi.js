//Imports
import React from "react";
import Timezone from "../components/Timezone";
import axios from "axios";

//Url et la clef 
const URL_KEY = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/?key=841d6f9d-c2de-4b6c-8a4d-047b0c8816a7";

class TimezoneApi extends React.Component {
   //On initialise le constructeur 
   constructor(props) {
    super(props);
    this.state = {
      liste: null
    };
  }

  //Lance la fonction une fois 
  componentDidMount(){
    // Call API
    axios
    //get récupère les données
      .get(`${URL_KEY}`)
      //stockées dans data
      .then(({ data }) => {           
        //dans l'arborescence du fichier json qu'est data on veut récupérer la branche departures
      
        //Departure est une liste composée de 9 listes
        //On récupère les 5 premières infos de départ
        const {timezone} = data.context

        const liste =[timezone]
        this.setState({ liste });
      })
      .catch(console.error);
     };

  render() {
    const { liste } = this.state;
    if (!liste) return <p>Loading...</p>;
    return (
      <div>
          {/* On envoie les données de chaque liste de départ a la classe Home */}
          {liste.map((ListeData, index) => {
            return <Timezone key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default TimezoneApi;