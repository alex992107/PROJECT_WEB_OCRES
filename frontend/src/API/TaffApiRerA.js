//Imports
import React from "react";
import TaffRerA from "../components/TaffRerA";
import axios from "axios";

//Url et la clef 
const URL_KEY = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/stop_areas/stop_area%3ASNCF%3A87758003/terminus_schedules?key=841d6f9d-c2de-4b6c-8a4d-047b0c8816a7";

class TaffApiRerA extends React.Component {
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
            const {date_times} = data.terminus_schedules[2];

            const liste =[date_times[0],date_times[1],date_times[2],date_times[3],date_times[4],date_times[5]]
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
                return <TaffRerA key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default TaffApiRerA;